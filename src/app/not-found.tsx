import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-2xl mt-4">页面未找到</p>
      <p className="text-lg mt-2">抱歉，我们无法找到您请求的页面。</p>
      <Link href="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded">
        返回首页
      </Link>
    </div>
  );
}