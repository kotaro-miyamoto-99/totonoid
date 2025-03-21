"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { ja } from "date-fns/locale"
import { cn } from "@/lib/utils"
import { createExperience } from "@/api/experience"
import { createExperienceSchema, type CreateExperienceInput } from "@/schemas/experience"
import { useToast } from "@/components/ui/use-toast"

export function AddExperience() {
  const router = useRouter()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<CreateExperienceInput>({
    resolver: zodResolver(createExperienceSchema),
    defaultValues: {
      date: new Date(),
      temperature: 90,
      waterTemperature: 15,
      duration: 10,
      satisfaction: 3,
    },
  })

  const onSubmit = async (data: CreateExperienceInput) => {
    try {
      setIsSubmitting(true)
      console.log('Submitting data:', data)
      const result = await createExperience(data)
      console.log('Submission result:', result)
      toast({
        title: "体験を記録しました",
        description: "ダッシュボードに反映されます",
      })
      router.push("/")
      router.refresh()
    } catch (error) {
      console.error('Submission error:', error)
      toast({
        title: "エラーが発生しました",
        description: error instanceof Error ? error.message : "もう一度お試しください",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>サウナ体験を記録する</CardTitle>
        <CardDescription>サウナでの体験を記録して、あなたの最適な整い温度を見つけましょう</CardDescription>
      </CardHeader>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="location">施設名</Label>
            <Input
              id="location"
              placeholder="サウナ施設の名前を入力"
              {...form.register("location")}
            />
            {form.formState.errors.location && (
              <p className="text-sm text-destructive">{form.formState.errors.location.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label>日付</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !form.getValues("date") && "text-muted-foreground"
                  )}
                  type="button"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {form.watch("date") ? (
                    format(form.watch("date"), "PPP", { locale: ja })
                  ) : (
                    "日付を選択"
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-white border rounded-md shadow-md">
                <div className="p-3 bg-white rounded-md">
                <Calendar
                  mode="single"
                  selected={form.watch("date")}
                  onSelect={(date) => date && form.setValue("date", date)}
                  initialFocus
                  locale={ja}
                  className="bg-white rounded-md"
                />
                </div>
              </PopoverContent>
            </Popover>
            {form.formState.errors.date && (
              <p className="text-sm text-destructive">{form.formState.errors.date.message}</p>
            )}
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>サウナ温度</Label>
                <span className="font-medium">{form.watch("temperature")}°C</span>
              </div>
              <Slider
                value={[form.watch("temperature")]}
                min={60}
                max={120}
                step={1}
                onValueChange={(value) => form.setValue("temperature", value[0] ?? 90)}
                className="relative flex w-full touch-none select-none items-center py-4 [&>span[role=slider]]:block [&>span[role=slider]]:h-6 [&>span[role=slider]]:w-6 [&>span[role=slider]]:rounded-full [&>span[role=slider]]:border-2 [&>span[role=slider]]:border-primary [&>span[role=slider]]:bg-primary [&>span[role=slider]]:shadow-md [&>span[role=slider]]:transition-colors [&>span[data-orientation=horizontal]]:h-2 [&>span[data-orientation=horizontal]]:w-full [&>span[data-orientation=horizontal]]:rounded-full [&>span[data-orientation=horizontal]]:bg-gray-200 [&>span[data-orientation=horizontal]>span]:h-full [&>span[data-orientation=horizontal]>span]:bg-primary [&>span[data-orientation=horizontal]>span]:rounded-full"
              />
              {form.formState.errors.temperature && (
                <p className="text-sm text-destructive">{form.formState.errors.temperature.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="waterTemperature">水風呂温度</Label>
              <Input
                id="waterTemperature"
                type="number"
                placeholder="15"
                {...form.register("waterTemperature", { valueAsNumber: true })}
              />
              {form.formState.errors.waterTemperature && (
                <p className="text-sm text-destructive">{form.formState.errors.waterTemperature.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">サウナ滞在時間（分）</Label>
              <Input
                id="duration"
                type="number"
                placeholder="10"
                {...form.register("duration", { valueAsNumber: true })}
              />
              {form.formState.errors.duration && (
                <p className="text-sm text-destructive">{form.formState.errors.duration.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>整い度</Label>
                <span className="font-medium">{form.watch("satisfaction")}/5</span>
              </div>
              <Slider
                value={[form.watch("satisfaction")]}
                min={1}
                max={5}
                step={0.5}
                onValueChange={(value) => form.setValue("satisfaction", value[0] ?? 3)}
                className="relative flex w-full touch-none select-none items-center py-4 [&>span[role=slider]]:block [&>span[role=slider]]:h-6 [&>span[role=slider]]:w-6 [&>span[role=slider]]:rounded-full [&>span[role=slider]]:border-2 [&>span[role=slider]]:border-primary [&>span[role=slider]]:bg-primary [&>span[role=slider]]:shadow-md [&>span[role=slider]]:transition-colors [&>span[data-orientation=horizontal]]:h-2 [&>span[data-orientation=horizontal]]:w-full [&>span[data-orientation=horizontal]]:rounded-full [&>span[data-orientation=horizontal]]:bg-gray-200 [&>span[data-orientation=horizontal]>span]:h-full [&>span[data-orientation=horizontal]>span]:bg-primary [&>span[data-orientation=horizontal]>span]:rounded-full"
              />
              {form.formState.errors.satisfaction && (
                <p className="text-sm text-destructive">{form.formState.errors.satisfaction.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">メモ</Label>
            <Textarea
              id="notes"
              placeholder="体験の詳細や感想を記録しましょう"
              {...form.register("notes")}
            />
            {form.formState.errors.notes && (
              <p className="text-sm text-destructive">{form.formState.errors.notes.message}</p>
            )}
          </div>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-2">
          <Button 
            className="w-full text-lg py-6 border-0 font-bold" 
            type="submit" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "保存中..." : "記録を保存"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
