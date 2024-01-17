import Navbar from "../../components/Navbar";
import Taskbar from "../../components/Taskbar";
import { DashboardContainer } from "./style";

export default function Dashboard() {

  return (
    <DashboardContainer>
      <Navbar></Navbar>
      <Taskbar></Taskbar>
    </DashboardContainer>
  )
}
