"use client"

import { VideoPlayer } from "@/components/lms/VideoPlayer"
import { CourseSidebar } from "@/components/lms/CourseSidebar"
import { NavigationArrows } from "@/components/lms/NavigationArrows"
import { SidebarTabs } from "@/components/lms/SidebarTabs"

interface PageProps {
  params: Promise<{
    courseId: string
    chapterId: string
  }>
}

export default async function ChapterPage({ params }: PageProps) {
  const { courseId, chapterId } = await params
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <VideoPlayer />
        <NavigationArrows 
          courseId={courseId} 
          currentChapterId={chapterId} 
        />
      </div>

      <div className="w-80 border-l">
        <SidebarTabs />
      </div>
    </div>
  )
}