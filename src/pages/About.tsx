import JumpLink from '@/components/JumpLink'

const Block = ({ children }: { children?: React.ReactNode }) => (
  <div className="text-gray-500 leading-8 break-all mb-10">{children}</div>
)

export default function About() {
  return (
    <div>
      <Block>
        Hello!
        我是砂絮糖(站名),一名全栈工程师,喜欢编码,阅读,游戏,和看电影。欢迎来到我的网站,你可以通过网站底部的联系方式来找。个人喜欢简约风格,网站素材来自于
        <JumpLink href="https://dribbble.com/shots/18432052-Framer-Template-Blog">
          Dribble
        </JumpLink>
        如果你想使用我的网站当模板,可以使用git克隆下来,修改成属于你自己的网站😊。
        <div className="mt-6 px-4 py-2 text-sm rounded-md bg-gray-100">
          git clone https://github.com/1837740965/www.taoy.icu.git
        </div>
      </Block>
      <Block>
        此网站是基于
        <JumpLink href="https://react.docschina.org/">React</JumpLink>,
        <JumpLink href="https://vitejs.dev/">Vite</JumpLink>,
        <JumpLink href="https://tailwindcss.com/">Tailwind</JumpLink>
        创建的。<JumpLink href="https://react.docschina.org/">React</JumpLink>
        是一个优秀的用于构建用户界面的 JavaScript
        框架,深受众多前端开发者的喜欢,当然也包括我。
        <JumpLink href="https://vitejs.dev/">Vite</JumpLink>
        号称下一代的前端工具链,无论应用程序大小如何,都始终极快的模块热替换（HMR）,开发体验非常不错。
        <JumpLink href="https://tailwindcss.com/">Tailwind</JumpLink>
        ,原子性CSS,可以快速构建现代网站,无需离开HTML。
      </Block>
    </div>
  )
}
