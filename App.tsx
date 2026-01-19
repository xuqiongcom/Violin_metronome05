
import React, { useEffect, useState } from 'react';
import MetronomeUI from './components/MetronomeUI';
import DroneUI from './components/DroneUI';
import { Music2, Download, Info, X } from 'lucide-react';

const App: React.FC = () => {
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    const setHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    window.addEventListener('resize', setHeight);
    setHeight();

    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setInstallPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('resize', setHeight);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === 'accepted') {
      setInstallPrompt(null);
    }
  };

  return (
    <div 
      className="min-h-screen bg-slate-950 flex flex-col items-center justify-start py-8 px-4 sm:p-8 overflow-y-auto"
      style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}
    >
      {/* 背景装饰 */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20 z-0">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-amber-500 rounded-full blur-[160px]" />
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-rose-500 rounded-full blur-[160px]" />
      </div>

      {/* 主界面 */}
      <main className="relative z-10 w-full max-w-lg">
        <header className="flex flex-col items-center mb-8 text-center">
          <div className="bg-amber-400/10 p-4 rounded-full mb-4 ring-1 ring-amber-400/20 backdrop-blur-sm">
            <Music2 className="text-amber-400" size={40} />
          </div>
          <h1 className="text-4xl font-serif font-bold text-white tracking-tight">Virtuoso</h1>
          <p className="text-slate-400 text-sm mt-1">专业小提琴练习工具箱</p>
          
          <div className="flex gap-2 mt-6">
            {installPrompt && (
              <button 
                onClick={handleInstallClick}
                className="flex items-center gap-2 bg-amber-400 text-slate-900 px-6 py-3 rounded-full text-sm font-bold shadow-xl shadow-amber-500/20 hover:bg-amber-300 transition-all animate-pulse"
              >
                <Download size={18} />
                一键安装 App
              </button>
            )}
            <button 
              onClick={() => setShowHelp(true)}
              className="p-3 bg-slate-800 text-slate-300 rounded-full hover:bg-slate-700 transition-colors border border-slate-700"
            >
              <Info size={20} />
            </button>
          </div>
        </header>

        <MetronomeUI />
        
        <DroneUI />

        <footer className="mt-12 mb-8 text-center">
          <p className="text-slate-600 text-sm">
            精准节拍 · 完美音准 · 离线可用
          </p>
        </footer>
      </main>

      {/* 帮助弹窗 */}
      {showHelp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-800 border border-slate-700 w-full max-w-sm rounded-3xl p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">安装指南</h3>
              <button onClick={() => setShowHelp(false)} className="text-slate-400 hover:text-white">
                <X size={24} />
              </button>
            </div>
            <div className="space-y-4 text-slate-300 text-sm">
              <div className="bg-slate-900/50 p-4 rounded-xl">
                <p className="font-bold text-amber-400 mb-1">方式 A：直接安装（推荐）</p>
                <p>使用 Android 手机的 Chrome 浏览器打开，点击页面顶部的“一键安装”即可。无需下载 APK。</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-xl">
                <p className="font-bold text-rose-400 mb-1">方式 B：使用 APK 文件</p>
                <p>在 PWABuilder 选择 Android 下载。安装时若提示“风险”或“来源不明”，请选择“仍然安装”。这是因为应用未上架 Google Play。</p>
              </div>
              <p className="text-xs text-slate-500 text-center">系统拦截 Windows 版本是正常的，请只在安卓手机上尝试安装。</p>
            </div>
            <button 
              onClick={() => setShowHelp(false)}
              className="w-full mt-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-xl font-bold transition-colors"
            >
              我知道了
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
