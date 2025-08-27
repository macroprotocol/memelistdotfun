# memelist.fun 🚀

A Web3 application that allows users to list their Solana meme coin images along with coin details like name, ticker, short description, social links, and DEX information. Users can connect their Solana wallet, pay a listing fee, and instantly see their coin listed on the platform.

## Features

- ✅ **Wallet Integration**: Connect with Phantom, Solflare, Backpack, and Brave wallets
- ✅ **Instant Listing**: Auto-list coins upon successful payment
- ✅ **Image Upload**: Upload and preview coin logos
- ✅ **Social Links**: Add website, Twitter, Telegram, and Discord links
- ✅ **DEX Integration**: Optional DEX trading links
- ✅ **Responsive Design**: Beautiful UI that works on all devices
- ✅ **Devnet Ready**: Test on Solana devnet before mainnet
- ✅ **Local Storage**: Persist listings in browser (demo mode)

## Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Web3**: Solana Web3.js + Wallet Adapter
- **Wallets**: Phantom, Solflare, Backpack, Brave
- **Network**: Solana Devnet/Mainnet

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_TREASURY=YOUR_SOLANA_WALLET_ADDRESS
```

**Important**: Replace `YOUR_SOLANA_WALLET_ADDRESS` with your actual Solana wallet address that will receive the listing fees.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## How It Works

1. **Fill Form**: Users enter coin details (name, ticker, description, social links, DEX)
2. **Upload Logo**: Select and preview coin logo image
3. **Connect Wallet**: Click "Submit & Pay" to connect Solana wallet
4. **Pay Fee**: Approve the 0.1 SOL listing fee transaction
5. **Instant Listing**: Coin appears immediately in the listings grid

## Configuration

### Network Settings

The app is configured for **devnet** by default. To switch to mainnet:

1. Open `app/page.tsx`
2. Change `const DEVNET = true;` to `const DEVNET = false;`

### Listing Fee

To modify the listing fee:

1. Open `app/page.tsx`
2. Change `const DEFAULT_FEE_SOL = 0.1;` to your desired amount

### Treasury Address

Set your receiving wallet address in the environment variable:

```env
NEXT_PUBLIC_TREASURY=YOUR_WALLET_ADDRESS
```

## 🚀 How the Listing System Works

### **For Users (Anyone with a Solana Wallet)**

1. **Connect Wallet**: Click "Connect Wallet" in the top right corner
2. **Fill Form**: Complete the meme coin listing form with project details
3. **Submit**: Click "Submit & Continue to Payment"
4. **Payment**: Pay 0.1 SOL listing fee using your Solana wallet
5. **Listed**: Your meme coin appears on the dashboard immediately!

### **Payment Flow**

- **Step 1**: User fills out listing form
- **Step 2**: Listing is created with "pending" status
- **Step 3**: User sees payment confirmation screen
- **Step 4**: User pays 0.1 SOL to treasury wallet
- **Step 5**: Listing status changes to "listed"
- **Step 6**: Listing appears on main dashboard

### **Configuration Required**

1. **Set Treasury Wallet**: Update `NEXT_PUBLIC_TREASURY` in your `.env.local` file
2. **Example**: `NEXT_PUBLIC_TREASURY=9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM`

### **Features**

- ✅ **Everyone can list** - No restrictions on who can create listings
- ✅ **Immediate visibility** - Listings appear right after submission
- ✅ **Payment integration** - Seamless Solana wallet payment
- ✅ **Status tracking** - Clear pending vs listed status indicators
- ✅ **Multi-blockchain** - Support for 8 major blockchains
- ✅ **Filtering** - Filter by blockchain, status, time, and search terms

## Project Structure

```
memelistdotfun/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main application component
├── package.json             # Dependencies and scripts
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Key Components

- **MemelistApp**: Main app wrapper with Solana providers
- **AppShell**: Core application layout and state management
- **Navbar**: Header with wallet connection and navigation
- **ListingForm**: Form for submitting new coin listings
- **ListingGrid**: Display grid for all listed coins
- **Hero/HowItWorks/FeeCard**: Informational sections

## Testing

### Devnet Testing

1. Get devnet SOL from a faucet (e.g., [Solana Faucet](https://faucet.solana.com/))
2. Connect your wallet to devnet
3. Submit a test listing with 0.05 devnet SOL

### Wallet Setup

The app supports multiple Solana wallets:
- Phantom
- Solflare
- Backpack
- Brave

Make sure your wallet is connected to the correct network (devnet/mainnet).

## Production Deployment

### Environment Variables

For production, ensure you have:

```env
NEXT_PUBLIC_TREASURY=YOUR_MAINNET_WALLET_ADDRESS
```

### Build and Deploy

```bash
npm run build
npm run start
```

### Recommended Hosting

- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any static hosting service

## Security Considerations

- **Treasury Address**: Always verify the treasury address before payments
- **Network**: Double-check you're on the correct network (devnet vs mainnet)
- **Image Storage**: Current implementation stores images as base64 in localStorage. For production, consider IPFS or cloud storage
- **Data Persistence**: Current implementation uses localStorage. For production, consider a database

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this project for your own meme coin directory!

## Support

If you encounter any issues:

1. Check the browser console for errors
2. Verify your wallet is connected to the correct network
3. Ensure you have sufficient SOL for the listing fee
4. Check that the treasury address is correctly set

---

**Happy listing! 🚀**
# memelistdotfun
