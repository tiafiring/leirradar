import {MineLeirstederPage} from "./component/page/MineLeirstederPage";
import LagreLeirsted from "./component/page/LagreLeirsted";

function App() {

    return (
        <div className="flex-none w-1204 relative px-60 font-sans bg-sky-200">
            <h1 className="flex-auto text-lg font-semibold text-slate-900 p-6">Leirradar</h1>
            <div className="flex-auto py-6">
                <MineLeirstederPage/>
            </div>
            <div className="text-sm text-slate-700 py-6">
                <LagreLeirsted/>
            </div>
        </div>
    )
}

export default App
