import { query, execute, closePool } from "./db";

const seedProducts = [
  {
    name: "Ceramic Minimalist Vase",
    price: "45.00",
    category: "Home",
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&q=80",
    isNew: true,
  },
  {
    name: "Premium Leather Backpack",
    price: "120.00",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    isNew: false,
  },
  {
    name: "Sonic Noise-Canceling Headphones",
    price: "299.00",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    isNew: true,
  },
  {
    name: "Botanical Face Cream",
    price: "65.00",
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
    isNew: false,
  },
  {
    name: "Minimalist Desk Lamp",
    price: "89.00",
    category: "Home",
    image: "https://images.unsplash.com/photo-1507473888900-52e1adad54cd?w=800&q=80",
    isNew: false,
  },
  {
    name: "Smart Watch Series 5",
    price: "350.00",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    isNew: true,
  },
];

async function seed() {
  console.log("Seeding database...");

  try {
    // Check if products already exist
    const existing = await query<{ count: number }>("SELECT COUNT(*) as count FROM products");
    if (existing[0].count > 0) {
      console.log("Database already seeded!");
      await closePool();
      process.exit(0);
      return;
    }

    // Insert products
    for (const product of seedProducts) {
      await execute(
        `INSERT INTO products (name, price, category, image, is_new) 
         VALUES (@name, @price, @category, @image, @isNew)`,
        {
          name: product.name,
          price: product.price,
          category: product.category,
          image: product.image,
          isNew: product.isNew,
        }
      );
    }

    console.log("Database seeded successfully!");
    await closePool();
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error);
    await closePool();
    process.exit(1);
  }
}

seed();
