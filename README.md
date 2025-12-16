# Genara - Commerce Platform

A complete commerce platform that lets you start, grow, and manage a business.

## Tech Stack

- **Frontend:** React 18 + TypeScript + Vite + Tailwind CSS
- **Backend:** Express.js + Node.js
- **Database:** Azure SQL Server (Serverless)
- **Deployment:** Azure App Service

## Local Development

### Prerequisites

- Node.js 20+
- Azure SQL Server database (or local SQL Server)

### Setup

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd genara
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your SQL Server connection details
   ```

4. Create database tables:
   ```bash
   npm run db:setup
   ```

5. Seed the database (optional):
   ```bash
   npm run db:seed
   ```

6. Start development server:
   ```bash
   npm run dev
   ```

7. Open http://localhost:5000

## Azure Deployment

### Step 1: Create Azure SQL Server (Serverless)

#### Using Azure Portal

1. **Create SQL Server:**
   - Go to Azure Portal → Create → SQL Server
   - Server name: `genara-sql`
   - Location: Choose your preferred region
   - Authentication: SQL authentication
   - Create admin username/password

2. **Create Database (Serverless):**
   - Go to your SQL Server → Databases → Create
   - Database name: `genara`
   - **Compute + storage:** Click "Configure database"
   - Select **Serverless** compute tier
   - Set auto-pause delay (e.g., 1 hour)
   - Min vCores: 0.5, Max vCores: 2 (adjust as needed)
   
3. **Configure Firewall:**
   - Go to SQL Server → Networking
   - Add your client IP address
   - Enable "Allow Azure services" for App Service access

#### Using Azure CLI

```bash
# Login to Azure
az login

# Create resource group
az group create --name genara-rg --location eastus

# Create SQL Server
az sql server create \
  --name genara-sql \
  --resource-group genara-rg \
  --location eastus \
  --admin-user genara_admin \
  --admin-password "YourSecurePassword123!"

# Create Serverless Database
az sql db create \
  --name genara \
  --resource-group genara-rg \
  --server genara-sql \
  --edition GeneralPurpose \
  --compute-model Serverless \
  --family Gen5 \
  --min-capacity 0.5 \
  --capacity 2 \
  --auto-pause-delay 60

# Allow Azure services
az sql server firewall-rule create \
  --name AllowAzureServices \
  --resource-group genara-rg \
  --server genara-sql \
  --start-ip-address 0.0.0.0 \
  --end-ip-address 0.0.0.0

# Add your IP (replace with your actual IP)
az sql server firewall-rule create \
  --name AllowMyIP \
  --resource-group genara-rg \
  --server genara-sql \
  --start-ip-address YOUR_IP \
  --end-ip-address YOUR_IP
```

### Step 2: Create Azure App Service

```bash
# Create App Service Plan
az appservice plan create \
  --name genara-plan \
  --resource-group genara-rg \
  --sku B1 \
  --is-linux

# Create Web App
az webapp create \
  --name genara-app \
  --resource-group genara-rg \
  --plan genara-plan \
  --runtime "NODE:20-lts"

# Configure app settings
az webapp config appsettings set \
  --name genara-app \
  --resource-group genara-rg \
  --settings \
    DB_SERVER="genara-sql.database.windows.net" \
    DB_NAME="genara" \
    DB_USER="genara_admin" \
    DB_PASSWORD="YourSecurePassword123!" \
    DB_PORT="1433" \
    NODE_ENV="production"
```

### Step 3: Set Up GitHub Actions

1. Get your Azure Web App publish profile:
   - Go to Azure Portal → Your Web App → Deployment Center → Manage publish profile
   - Download the publish profile

2. Add secrets to your GitHub repository:
   - Go to GitHub repo → Settings → Secrets and variables → Actions
   - Add `AZURE_WEBAPP_PUBLISH_PROFILE` (paste entire publish profile XML)
   - Add database credentials:
     - `DB_SERVER`
     - `DB_NAME`
     - `DB_USER`
     - `DB_PASSWORD`

3. Update `.github/workflows/azure-deploy.yml`:
   - Change `AZURE_WEBAPP_NAME` to your actual app name

4. Push to main branch to trigger deployment:
   ```bash
   git add .
   git commit -m "Deploy to Azure"
   git push origin main
   ```

### Step 4: Initialize Database

After deployment, run the setup script:

```bash
# Set environment variables locally
export DB_SERVER="genara-sql.database.windows.net"
export DB_NAME="genara"
export DB_USER="genara_admin"
export DB_PASSWORD="YourSecurePassword123!"

# Create tables
npm run db:setup

# Seed data (optional)
npm run db:seed
```

## Azure SQL Serverless Benefits

- **Auto-pause:** Database pauses after inactivity (saves money)
- **Auto-resume:** Automatically wakes up on first connection
- **Pay-per-second:** Only pay for compute when actively used
- **Scales automatically:** Between min and max vCores

### Cost Estimates (Serverless)

| Usage | Approximate Cost |
|-------|------------------|
| Light (few hours/day) | ~$5-15/month |
| Moderate (business hours) | ~$25-50/month |
| Heavy (always on) | ~$100+/month |

**Note:** Serverless has a ~1 minute cold start when resuming from paused state. For always-on applications, consider provisioned compute.

## Project Structure

```
genara/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/          # Page components
│   │   └── main.tsx        # Entry point
│   └── index.html
├── server/                 # Express backend
│   ├── index.ts            # Server entry
│   ├── routes.ts           # API routes
│   ├── storage.ts          # Database operations
│   ├── db.ts               # SQL Server connection
│   ├── setup-db.ts         # Table creation
│   └── seed.ts             # Sample data
├── shared/
│   └── schema.ts           # Type definitions
├── .github/
│   └── workflows/
│       └── azure-deploy.yml
├── package.json
├── vite.config.ts
└── tailwind.config.js
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/products | Get all products |
| GET | /api/products/:id | Get single product |
| POST | /api/products | Create product |
| PATCH | /api/products/:id | Update product |
| DELETE | /api/products/:id | Delete product |
| GET | /api/cart | Get cart items |
| POST | /api/cart | Add to cart |
| PATCH | /api/cart/:id | Update cart item |
| DELETE | /api/cart/:id | Remove from cart |
| DELETE | /api/cart | Clear cart |

## Environment Variables

| Variable | Description |
|----------|-------------|
| `DB_SERVER` | SQL Server hostname (e.g., `server.database.windows.net`) |
| `DB_NAME` | Database name |
| `DB_USER` | Database username |
| `DB_PASSWORD` | Database password |
| `DB_PORT` | Database port (default: 1433) |
| `PORT` | Server port (default: 5000) |
| `NODE_ENV` | Environment (`development` or `production`) |

## License

MIT
