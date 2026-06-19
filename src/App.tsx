import Thumbnail from './components/Thumbnail'
import saasDash from './lottie/saasDash.json'
import ecommerce from './lottie/ecommerce.json'
import chatApp from './lottie/chatApp.json'
import blog from './lottie/blog.json'

const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-full h-[97vh] flex items-center justify-center">
    <h2 className="text-2xl font-serif text-orange-100">{children}</h2>
  </div>
)

export default function App() {
  return (
    <div className="p-4 h-full w-full flex flex-col gap-6">
      <Label>Scroll Down</Label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 w-full">
        <Thumbnail anim={saasDash} mobileOffset={80} desktopOffset={30} />
        <Thumbnail anim={ecommerce} mobileOffset={120} desktopOffset={30} />
        <Thumbnail anim={chatApp} mobileOffset={80} desktopOffset={90} />
        <Thumbnail anim={blog} mobileOffset={150} desktopOffset={130} />
      </div>
      <Label>Cool?</Label>
    </div>
  )
}
