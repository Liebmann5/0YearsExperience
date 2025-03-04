import Links from '@/components/links'

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="text-2xl font-heading sm:text-4xl">Nicholas Liebmann</h1>
      <p className="mt-2 text-lg sm:text-xl">Construction Worker</p>
      <div className="mt-8 text-base sm:text-lg">
        <p>Howdy, my name is Nick Liebmann, construction worker based out of Los Angeles, CA.</p>

        <br />

        <p>
          This is now the new home of my personal website. My previous one was built completely
          from scratch and thought people would appreciate the work it took but realized
          absolutely nobody cared and everyone hated it. I&apos;m still a big fan of it so if you&apos;d
          like to check the{' '}
          <a
            target="_blank"
            className="font-heading underline"
            href="https://nicholasliebmann.com/"
          >
            website
          </a>{' '}
          out for yourself will link it somewhere.
        </p>

        <br />

        <p>
          I enjoy anything science related except for everything that isn&apos;t Math, Computers, or Physics.
          I&apos;ve been coding for about 4+ years and just recently got back into tinkering which is pretty
          dope. I built and create whatever I think is cool and the tougher the project the more I&apos;m
          interested. I hope you wander around and feel like a genius in comparison to me! Last but not
          least please, say Hello to your mother for me. ;)
        </p>
      </div>

      <Links />
    </div>
  )
}
