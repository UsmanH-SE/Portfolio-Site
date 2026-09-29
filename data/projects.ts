export interface Project {
  id: string;
  title: string;
  problem: string;
  built: string;
  result: string;
  tags: string[];
  image: string;
  loomUrl: string;
}

export const projects: Project[] = [
  {
    id: "abandoned-cart-recovery",
    title: "Abandoned Cart Recovery Agent",
    problem:
      "Customers add products to their cart and leave without buying. The store owner loses these sales and nobody follows up.",
    built:
      "A workflow that catches cart events from the store, makes sure the same cart is not handled twice, and checks if the product is still in stock. Then it sends follow-up messages after 1 hour, 4 hours and 24 hours. The last message includes a discount coupon.",
    result:
      "Every abandoned cart gets followed up automatically. No duplicate messages. The store owner can track the recovery rate.",
    tags: ["n8n", "Webhooks", "Email", "Coupons"],
    image: "/projects/abandoned-cart.png",
    loomUrl: "https://www.loom.com/share/8f1bc6b3bdc04da99fe21f7ad861a3f0",
  },
  {
    id: "content-repurposing",
    title: "Content Repurposing Agent",
    problem:
      "Making one piece of content into posts for different platforms takes a lot of time when done by hand.",
    built:
      "A workflow that takes one piece of content and uses AI to turn it into posts for different platforms.",
    result:
      "One piece of content becomes many ready-to-use posts without doing the work again and again.",
    tags: ["n8n", "Gemini AI", "DALL-E 3", "Airtable", "Slack"],
    image: "/projects/content-repurposing.png",
    loomUrl: "", // Paste your Loom video link here
  },
  {
    id: "billing-invoice-agent",
    title: "Billing and Invoice Agent",
    problem:
      "Making invoices by hand every month is slow. It is easy to make mistakes or send the same invoice twice.",
    built:
      "A monthly workflow that reads billing data from a database, makes a PDF invoice for each client, saves it in Google Drive and emails it to the client with Gmail. It also checks that an invoice is never sent twice.",
    result:
      "Invoices go out on time every month without manual work, and each client gets only one invoice.",
    tags: ["n8n", "PostgreSQL", "Google Drive", "Gmail", "PDF"],
    image: "/projects/billing-invoice.png",
    loomUrl: "", // Paste your Loom video link here
  },
  {
    id: "weekly-sales-summary",
    title: "E-commerce Weekly Sales Summary Automation",
    problem:
      "Store owners and managers spend hours every Monday manually checking what sold over the week, which items are in high demand, and what products are running out of stock.",
    built:
      "A scheduled workflow that triggers every Monday at 8:00 AM. It fetches all orders from the past 7 days, calculates revenue and order metrics, passes the data to an AI model (Gemini Flash) to generate an executive sales and stock alert summary, and dispatches an email directly to leadership via Gmail.",
    result:
      "Leadership receives a clear, comprehensive sales and inventory summary in their inbox every Monday morning without any manual work.",
    tags: ["n8n", "Gemini AI", "Gmail", "Cron", "Sales Metrics"],
    image: "/projects/weekly-sales-summary.png",
    loomUrl: "", // Paste your Loom video link here
  },
];
