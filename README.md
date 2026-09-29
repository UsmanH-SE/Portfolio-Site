# Usman Haider – Personal Portfolio

A clean, personal portfolio website for Usman Haider, Software Engineer specializing in AI Automation and Full Stack Development.

Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Running Locally

1. **Start the local development server**:
   ```bash
   npm run dev
   ```

2. **Open the browser**:
   Visit [http://localhost:3000](http://localhost:3000)

3. **Build for production**:
   ```bash
   npm run build
   npm run start
   ```

---

## 📸 Adding Your Workflow Screenshots

In `public/projects/`, save your 16:9 screenshot images using these exact filenames:

- `abandoned-cart.png`
- `content-repurposing.png`
- `billing-invoice.png`
- `lead-intake.png`

If any image file is missing, the card automatically displays a clean dark placeholder box with the text **"Workflow image"**.

---

## 🎥 Adding Your Loom Walkthrough Links

Open [data/projects.ts](file:///d:/My-portfolio/data/projects.ts). For each project, paste your Loom link into `loomUrl`:

```ts
{
  id: "abandoned-cart-recovery",
  title: "Abandoned Cart Recovery Agent",
  ...
  loomUrl: "https://www.loom.com/share/your-loom-id-here", // Paste link here
}
```

If `loomUrl` is left empty `""`, the "Watch Loom Walkthrough" button stays hidden. Once you add a link, the button appears automatically.

---

## 🚢 Deploying to Vercel

1. Commit your changes:
   ```bash
   git init
   git add .
   git commit -m "Update portfolio"
   ```

2. Push to your GitHub repository:
   ```bash
   git remote add origin https://github.com/UsmanH-SE/portfolio.git
   git branch -M main
   git push -u origin main
   ```

3. Import into [Vercel](https://vercel.com) and deploy with one click.
