import { me } from "@/assets"

export const Me = () => {
  return (
    <div className="text-black-500 dark:text-white ">
      <img src={me} alt="me" id="#me" className="w-48 h-48 rounded-full" />
      <h2>Rakesh Gandla</h2>
    </div>
  )
}
