import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiFreecodecamp,
} from '@icons-pack/react-simple-icons'

export default function Links() {
  const links: { icon: IconType; href: string }[] = [
    {
      icon: SiGmail,
      href: 'mailto:Liebmann.nicholas1@gmail.com',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/Liebmann5',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/liebmann5/',
    },
    {
      icon: SiFreecodecamp,
      href: 'https://www.freecodecamp.org/Liebmann5',
    },
  ]

  return (
    <div className="mr-auto mt-20 flex w-full flex-wrap items-center gap-10">
      {links.map((link, id) => {
        return (
          <a target="_blank" key={id} href={link.href}>
            <link.icon title="" />
          </a>
        )
      })}
    </div>
  )
}
