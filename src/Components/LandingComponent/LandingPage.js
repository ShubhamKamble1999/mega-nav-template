import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

export default function LandingPage() {
	const [activeDropdown, setActiveDropdown] = useState(null)
	const dropdownRef = useRef(null)

	const handleDropdownHover = (dropdownName) => {
		setActiveDropdown(dropdownName)
	}

	const handleDropdownLeave = () => {
		setActiveDropdown(null)
	}

	useEffect(() => {
		const adjustDropdownPosition = () => {
			if (dropdownRef.current) {
				const rect = dropdownRef.current.getBoundingClientRect()
				const viewportWidth = window.innerWidth

				if (rect.right > viewportWidth) {
					// const overflowAmount = rect.right - viewportWidth
					dropdownRef.current.style.left = `calc(50%)`
					dropdownRef.current.style.transform = 'translateX(-50%)'
				} else {
					dropdownRef.current.style.left = '50%'
					dropdownRef.current.style.transform = 'translateX(-50%)'
				}
			}
		}

		if (activeDropdown) {
			adjustDropdownPosition()
			window.addEventListener('resize', adjustDropdownPosition)
		}

		return () => {
			window.removeEventListener('resize', adjustDropdownPosition)
		}
	}, [activeDropdown])

	const renderDropdown = (item) => {
		if (item === 'Services') {
			return (
				<div ref={dropdownRef} className="absolute left-0 mt-2 w-[800px] bg-white rounded-md shadow-lg p-6 z-10 grid grid-cols-3 gap-6">
					<div>
						<h3 className="text-lg font-semibold mb-2 text-gray-800">Web Development</h3>
						<ul className="space-y-2">
							<li><a href="#" className="text-gray-600 hover:text-gray-900">Frontend Development</a></li>
							<li><a href="#" className="text-gray-600 hover:text-gray-900">Backend Development</a></li>
							<li><a href="#" className="text-gray-600 hover:text-gray-900">Full Stack Solutions</a></li>
							<li><a href="#" className="text-gray-600 hover:text-gray-900">E-commerce Platforms</a></li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-2 text-gray-800">Mobile Development</h3>
						<ul className="space-y-2">
							<li><a href="#" className="text-gray-600 hover:text-gray-900">iOS App Development</a></li>
							<li><a href="#" className="text-gray-600 hover:text-gray-900">Android App Development</a></li>
							<li><a href="#" className="text-gray-600 hover:text-gray-900">Cross-platform Solutions</a></li>
							<li><a href="#" className="text-gray-600 hover:text-gray-900">App Maintenance</a></li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-2 text-gray-800">Cloud Services</h3>
						<ul className="space-y-2">
							<li><a href="#" className="text-gray-600 hover:text-gray-900">Cloud Migration</a></li>
							<li><a href="#" className="text-gray-600 hover:text-gray-900">DevOps</a></li>
							<li><a href="#" className="text-gray-600 hover:text-gray-900">Serverless Architecture</a></li>
							<li><a href="#" className="text-gray-600 hover:text-gray-900">Cloud Security</a></li>
						</ul>
					</div>
				</div>
			)
		} else {
			return (
				<div ref={dropdownRef} className="absolute mt-2 w-64 bg-white rounded-md shadow-lg p-4 z-10">
					<h3 className="text-lg font-semibold mb-2 text-gray-800">{item}</h3>
					<ul className="space-y-2">
						<li><a href="#" className="text-gray-600 hover:text-gray-900">Subitem 1</a></li>
						<li><a href="#" className="text-gray-600 hover:text-gray-900">Subitem 2</a></li>
						<li><a href="#" className="text-gray-600 hover:text-gray-900">Subitem 3</a></li>
					</ul>
				</div>
			)
		}
	}

	return (
		<div className="h-screen w-full bg-gradient-to-br from-purple-400 to-indigo-600">
			<nav className="absolute top-0 left-0 right-0 bg-transparent p-4">
				<div className="container mx-auto flex items-center justify-between">
					<div className="text-white text-2xl font-bold">Logo</div>
					<ul
						className="flex space-x-6"
						onMouseLeave={handleDropdownLeave}
					>
						{['Products', 'Services', 'About', 'Contact'].map((item) => (
							<li
								key={item}
								className="relative"
								onMouseEnter={() => handleDropdownHover(item)}
							>
								<a href="#" className="text-white hover:text-gray-200 flex items-center">
									{item}
									<ChevronDown className="ml-1 h-4 w-4" />
								</a>
								{activeDropdown === item && renderDropdown(item)}
							</li>
						))}
					</ul>
				</div>
			</nav>
			<main className="h-full flex items-center justify-center">
				<h1 className="text-4xl font-bold text-white text-center">
					Welcome to Our Landing Page
				</h1>
			</main>
		</div>
	)
}
