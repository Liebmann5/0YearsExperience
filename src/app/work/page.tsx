import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'

export default function Work() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">Professional</h1>

      <div className="mb-10 text-base sm:text-lg">
        <p>
          As you will see below I have plenty of experience experiencing experiences. I plan to
          continue collecting experience so that I can say that I&apos;m experienced!
        </p>
      </div>

      <Experience />

      <Skills />
    </div>
  )
}
