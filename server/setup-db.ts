import { execute, closePool } from "./db";

async function setupDatabase() {
  console.log("Setting up database tables...");

  try {
    // Create products table
    await execute(`
      IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='products' AND xtype='U')
      CREATE TABLE products (
        id INT IDENTITY(1,1) PRIMARY KEY,
        name NVARCHAR(255) NOT NULL,
        price DECIMAL(10,2) NOT NULL,
        category NVARCHAR(100) NOT NULL,
        image NVARCHAR(500) NOT NULL,
        is_new BIT NOT NULL DEFAULT 0
      )
    `);
    console.log("✓ Products table ready");

    // Create cart_items table
    await execute(`
      IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='cart_items' AND xtype='U')
      CREATE TABLE cart_items (
        id INT IDENTITY(1,1) PRIMARY KEY,
        product_id INT NOT NULL,
        quantity INT NOT NULL DEFAULT 1,
        FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
      )
    `);
    console.log("✓ Cart items table ready");

    console.log("Database setup complete!");
    await closePool();
    process.exit(0);
  } catch (error) {
    console.error("Database setup failed:", error);
    await closePool();
    process.exit(1);
  }
}

setupDatabase();
