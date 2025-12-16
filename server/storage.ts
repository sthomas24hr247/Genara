import { query, execute, sql } from "./db";

export interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
  isNew: boolean;
}

export interface InsertProduct {
  name: string;
  price: string;
  category: string;
  image: string;
  isNew?: boolean;
}

export interface CartItem {
  id: number;
  productId: number;
  quantity: number;
}

export interface InsertCartItem {
  productId: number;
  quantity?: number;
}

export interface IStorage {
  getAllProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  updateProduct(id: number, product: Partial<InsertProduct>): Promise<Product | undefined>;
  deleteProduct(id: number): Promise<void>;
  getCartItems(): Promise<CartItem[]>;
  addToCart(item: InsertCartItem): Promise<CartItem>;
  updateCartItem(id: number, quantity: number): Promise<CartItem | undefined>;
  removeFromCart(id: number): Promise<void>;
  clearCart(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getAllProducts(): Promise<Product[]> {
    const results = await query<any>("SELECT id, name, price, category, image, is_new as isNew FROM products");
    return results.map(r => ({
      ...r,
      isNew: Boolean(r.isNew)
    }));
  }

  async getProduct(id: number): Promise<Product | undefined> {
    const results = await query<any>(
      "SELECT id, name, price, category, image, is_new as isNew FROM products WHERE id = @id",
      { id }
    );
    if (results.length === 0) return undefined;
    return {
      ...results[0],
      isNew: Boolean(results[0].isNew)
    };
  }

  async createProduct(product: InsertProduct): Promise<Product> {
    const result = await execute(
      `INSERT INTO products (name, price, category, image, is_new) 
       OUTPUT INSERTED.id, INSERTED.name, INSERTED.price, INSERTED.category, INSERTED.image, INSERTED.is_new as isNew
       VALUES (@name, @price, @category, @image, @isNew)`,
      {
        name: product.name,
        price: product.price,
        category: product.category,
        image: product.image,
        isNew: product.isNew ?? false,
      }
    );
    const inserted = result.recordset[0];
    return {
      ...inserted,
      isNew: Boolean(inserted.isNew)
    };
  }

  async updateProduct(id: number, product: Partial<InsertProduct>): Promise<Product | undefined> {
    const updates: string[] = [];
    const params: Record<string, any> = { id };

    if (product.name !== undefined) {
      updates.push("name = @name");
      params.name = product.name;
    }
    if (product.price !== undefined) {
      updates.push("price = @price");
      params.price = product.price;
    }
    if (product.category !== undefined) {
      updates.push("category = @category");
      params.category = product.category;
    }
    if (product.image !== undefined) {
      updates.push("image = @image");
      params.image = product.image;
    }
    if (product.isNew !== undefined) {
      updates.push("is_new = @isNew");
      params.isNew = product.isNew;
    }

    if (updates.length === 0) {
      return this.getProduct(id);
    }

    const result = await execute(
      `UPDATE products SET ${updates.join(", ")} 
       OUTPUT INSERTED.id, INSERTED.name, INSERTED.price, INSERTED.category, INSERTED.image, INSERTED.is_new as isNew
       WHERE id = @id`,
      params
    );

    if (result.recordset.length === 0) return undefined;
    return {
      ...result.recordset[0],
      isNew: Boolean(result.recordset[0].isNew)
    };
  }

  async deleteProduct(id: number): Promise<void> {
    await execute("DELETE FROM products WHERE id = @id", { id });
  }

  async getCartItems(): Promise<CartItem[]> {
    const results = await query<any>(
      "SELECT id, product_id as productId, quantity FROM cart_items"
    );
    return results;
  }

  async addToCart(item: InsertCartItem): Promise<CartItem> {
    const result = await execute(
      `INSERT INTO cart_items (product_id, quantity) 
       OUTPUT INSERTED.id, INSERTED.product_id as productId, INSERTED.quantity
       VALUES (@productId, @quantity)`,
      {
        productId: item.productId,
        quantity: item.quantity ?? 1,
      }
    );
    return result.recordset[0];
  }

  async updateCartItem(id: number, quantity: number): Promise<CartItem | undefined> {
    const result = await execute(
      `UPDATE cart_items SET quantity = @quantity 
       OUTPUT INSERTED.id, INSERTED.product_id as productId, INSERTED.quantity
       WHERE id = @id`,
      { id, quantity }
    );
    return result.recordset[0];
  }

  async removeFromCart(id: number): Promise<void> {
    await execute("DELETE FROM cart_items WHERE id = @id", { id });
  }

  async clearCart(): Promise<void> {
    await execute("DELETE FROM cart_items");
  }
}

export const storage = new DatabaseStorage();
