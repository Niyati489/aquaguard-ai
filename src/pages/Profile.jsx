import StatCard from "../components/StatCard";
function Areas(){
    return <div>
        <h1 className="text-xl font-bold text-center">Monitored Areas</h1>
        <div className="flex flex-col space-y-3">
            <StatCard title="delhi zone A" value="risk:high"/>
            <StatCard title="delhi zone B" value="risk:moderate"/>
            <StatCard title="delhi zone C" value="risk:low"/>
        </div>

    </div>
}
export default Areas;