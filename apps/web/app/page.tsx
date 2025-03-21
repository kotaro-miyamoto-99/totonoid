import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dashboard } from "@/components/dashboard"
import { AddExperience } from "@/components/add-experience"
import { Recommendations } from "@/components/recommendations"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <h1 className="text-xl font-bold">トトノイド</h1>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <Tabs defaultValue="dashboard" className="space-y-4">
          <TabsList>
            <TabsTrigger value="dashboard">ダッシュボード</TabsTrigger>
            <TabsTrigger value="add">記録する</TabsTrigger>
            <TabsTrigger value="recommendations">おすすめ施設</TabsTrigger>
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

