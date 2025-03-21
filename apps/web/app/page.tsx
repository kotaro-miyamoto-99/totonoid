import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dashboard } from "@/components/dashboard"
import { AddExperience } from "@/components/add-experience"
import { Recommendations } from "@/components/recommendations"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-primary-50">
      <header className="sticky top-0 z-10 border-b bg-primary-100 backdrop-blur supports-[backdrop-filter]:bg-primary-100/90">
        <div className="container flex h-16 items-center">
          <h1 className="text-2xl font-extrabold tracking-wider text-primary-900">トトノイド</h1>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <Tabs defaultValue="dashboard" className="space-y-4">
          <TabsList className="bg-white/80 backdrop-blur rounded-lg border border-primary-100">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-primary-100 data-[state=active]:text-primary-900 font-medium">ダッシュボード</TabsTrigger>
            <TabsTrigger value="add" className="data-[state=active]:bg-wood-100 data-[state=active]:text-wood-900 font-medium">記録する</TabsTrigger>
            <TabsTrigger value="recommendations" className="data-[state=active]:bg-nature-100 data-[state=active]:text-nature-900 font-medium">おすすめ施設</TabsTrigger>
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

