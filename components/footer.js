export default function Footer() {
  return (
    <div id="footer" className=''>
      <div id="links" className='mb-6'>
        <a className="hover:underline mr-2 inline-block text-gray-400 text-xs" href="#">About</a>
        <a className="hover:underline mr-2 inline-block text-gray-400 text-xs" href="#">Help</a>
        <a className="hover:underline mr-2 inline-block text-gray-400 text-xs" href="#">Press</a>
        <a className="hover:underline mr-2 inline-block text-gray-400 text-xs" href="#">API</a>
        <a className="hover:underline mr-2 inline-block text-gray-400 text-xs" href="#">Jobs</a>
        <a className="hover:underline mr-2 inline-block text-gray-400 text-xs" href="#">Privacy</a>
        <a className="hover:underline mr-2 inline-block text-gray-400 text-xs" href="#">Terms</a>
        <a className="hover:underline mr-2 inline-block text-gray-400 text-xs" href="#">Locations</a>
        <a className="hover:underline mr-2 inline-block text-gray-400 text-xs" href="#">Language</a>
      </div>
      <p className='text-gray-400 text-xs'>&copy; {`${new Date().getFullYear()} INSTAGRAM FOR US`}</p>
    </div>
  )
}