import { Model } from "./index.ts";

class Collection<T extends Model> extends Array<T> {
  constructor(items: T[] = []) {
    if (!isArray(items))
      throw new TypeError("Collection constructor expects an array");
    super(...items);
    // Fix prototype chain for older environments (optional but safe)
    // Object.setPrototypeOf(this, Collection.prototype);
  }

  // Example: add a Laravel-style `first` method
  first(): T | null {
    return this.length > 0 ? this[0] : null;
  }

  // Example: add a Laravel-style `pluck`
  pluck<K extends keyof T>(key: K): Array<T[K]> {
    return this.map((item) => item[key]);
  }

  toArray(): (T | Record<string, unknown>)[] {
    const data: (T | Record<string, unknown>)[] = [];
    for (const item of this) {
      const attributes = item.getRawAttributes();
      for (const [key, value] of Object.entries(attributes)) {
        if (value instanceof Collection) {
          attributes[key] = value.toArray();
        } else if (value instanceof Model) {
          attributes[key] = value.toObject();
        } else {
          attributes[key] = value;
        }
      }
      data.push(attributes);
    }
    return data;
  }
}

export default Collection;
