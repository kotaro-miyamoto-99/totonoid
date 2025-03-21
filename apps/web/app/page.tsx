import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LayoutDashboard, PlusCircle, Search } from "lucide-react"
import { Dashboard } from "@/components/dashboard"
import { AddExperience } from "@/components/add-experience"
import { Recommendations } from "@/components/recommendations"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-amber-50 to-orange-50">
      <header className="sticky top-0 z-10 border-b border-amber-200/50 bg-amber-100/80 backdrop-blur supports-[backdrop-filter]:bg-amber-50/80">
        <div className="container flex h-16 items-center">
          <h1 className="text-2xl font-extrabold tracking-wider bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">トトノイド</h1>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <Tabs defaultValue="dashboard" className="space-y-4">
          <TabsList className="bg-white/60 backdrop-blur rounded-lg border border-amber-200/50 shadow-sm p-1 h-auto grid grid-cols-3 gap-1 sm:flex sm:gap-2">
            <TabsTrigger 
              value="dashboard" 
              className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-900 hover:bg-amber-50 font-medium flex items-center gap-2 px-3 py-2 transition-all"
            >
              <LayoutDashboard className="h-4 w-4" />
              <span className="hidden sm:inline">ダッシュボード</span>
            </TabsTrigger>
            <TabsTrigger 
              value="add" 
              className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-900 hover:bg-amber-50 font-medium flex items-center gap-2 px-3 py-2 transition-all"
            >
              <PlusCircle className="h-4 w-4" />
              <span className="hidden sm:inline">記録する</span>
            </TabsTrigger>
            <TabsTrigger 
              value="recommendations" 
              className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-900 hover:bg-amber-50 font-medium flex items-center gap-2 px-3 py-2 transition-all"
            >
              <Search className="h-4 w-4" />
              <span className="hidden sm:inline">おすすめ施設</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="dashboard" className="space-y-4">
            <Dashboard />
          </TabsContent>
          <TabsContent value="add" className="space-y-4">
            <AddExperience />
          </TabsContent>
          <TabsContent value="recommendations" className="space-y-4">
            <Recommendations />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

