import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './components/ScrollToTop';

const Homepage = lazy(() => import('./homepage'));
const Compiler = lazy(() => import('./projects/compiler'));
const KVS = lazy(() => import('./projects/kvs'))
const Chaptre = lazy(() => import('./projects/chaptre'))
const Server = lazy(() => import('./projects/server'))
const RegexEngine = lazy(() => import('./projects/regexengine'))
const Emulator = lazy(() => import('./projects/emulator'))

function App() {

  return (
    <>
    <Router basename="/Portfolio_Website">
    <ScrollToTop />
      <Routes>
        <Route index element={<Suspense fallback={<>Loading homepage...</>}> <Homepage/></Suspense>}/>
        <Route path="compiler" element={ <Suspense fallback={<>Loading project ...</>}> <Compiler/> </Suspense>}/>
        <Route path="kvs" element={ <Suspense fallback={<>Loading project ...</>}> <KVS/> </Suspense>}/>
        <Route path="chaptre" element={ <Suspense fallback={<>Loading project ...</>}> <Chaptre/> </Suspense>}/>
        <Route path="httpserver" element={ <Suspense fallback={<>Loading project ...</>}> <Server/> </Suspense>}/>
        <Route path="regexengine" element={ <Suspense fallback={<>Loading project ...</>}> <RegexEngine/> </Suspense>}/>
        <Route path="emulator" element={ <Suspense fallback={<>Loading project ...</>}> <Emulator/> </Suspense>}/>

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
