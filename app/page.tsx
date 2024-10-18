import Pricing from "@/components/Pricing";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="h-fit bg-white flex flex-col">
      {/* Used shadcn for Tab switching */}
      <Tabs defaultValue="monthly" className="w-fit mx-auto mt-10">
        <TabsList className="grid w-[200px] mx-auto grid-cols-2 bg-blue-100 rounded-md h-fit">
          <TabsTrigger
            className="h-10 font-medium text-gray-900"
            value="monthly"
          >
            Monthly
          </TabsTrigger>
          <TabsTrigger
            className="h-10 font-medium text-gray-900"
            value="annual"
          >
            Annual
          </TabsTrigger>
        </TabsList>

        <TabsContent value="monthly">
          <Pricing interval="month" />
        </TabsContent>
        <TabsContent value="annual">
          <Pricing interval="annual" />
        </TabsContent>
      </Tabs>
    </div>
  );
}
