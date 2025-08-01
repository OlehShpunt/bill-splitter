import NavigationBar from "@/components/shared/NavigationBar";
import "@/app/globals.css";

export default function BillItems() {
  return (
    <html>
      <body>
        <NavigationBar></NavigationBar>
        <div className="h-0.5"></div>
        <p className="block w-fit mt-50 m-auto">
          Displaying items in your most recent bill...
        </p>
      </body>
    </html>
  );
}
