import dynamic from "next/dynamic"


const Layout = dynamic(import("components/layout"), {ssr: false})
const Dash = dynamic(import("components/dash"),)
const Assign = dynamic(import("components/assign"),)
const Table = dynamic(import("components/table"),)
const Tabs = dynamic(import("components/tabs"),)
const Icon = dynamic(import("components/headerIcon"),)


export default function Home() {
  return (
    
    <Layout >
      <Icon></Icon>
       <Tabs></Tabs>
      <Assign></Assign>
      <Dash></Dash>  
      <Table></Table>  
     
    </Layout>
  )
}

