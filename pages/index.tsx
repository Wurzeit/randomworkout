import { useRouter } from "next/router"
import classes from './style.module.css'

const Home = () => {
  const workouts = [
    'ベンチプレス',
    'スクワット',
    'デッドリフト',
  ]
  const getRandomInt = (min: number, max: number) => {
    const mi = Math.ceil(min)
    const ma = Math.floor(max)
    return Math.floor(Math.random() * (ma - mi + 1) + mi)
  }
  const router = useRouter()
  return (
    <div className={classes.main}>
      <title>Random workout</title>
      <h1>Random workout</h1>
      <p suppressHydrationWarning={true}>今日のあなたの筋トレは{workouts[getRandomInt(0, workouts.length - 1)]}だ！</p>
      <button onClick={() => router.push('/')}>再生成</button>
    </div>
  )
}

export default Home
