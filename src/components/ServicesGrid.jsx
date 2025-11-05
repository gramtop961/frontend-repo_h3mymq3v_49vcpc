import React, { useState } from 'react'
import { Shield, Eye, Building2, Key, Calendar, Wrench, Smartphone, Radar } from 'lucide-react'

const services = [
  {
    title: 'Security Management',
    icon: () => (
      <div className="flex items-center gap-2">
        <Shield className="w-5 h-5" />
        <Eye className="w-5 h-5" />
      </div>
    ),
    points: ['Manned Guarding', 'Mobile Patrols', 'VIP Protection', 'AI CCTV', 'Crisis Response'],
  },
  {
    title: 'Asset & Property Management',
    icon: () => (
      <div className="flex items-center gap-2">
        <Building2 className="w-5 h-5" />
        <Key className="w-5 h-5" />
      </div>
    ),
    points: ['Tenant Relations', 'Rent Collection', 'Maintenance Oversight', 'Renovation Coordination'],
  },
  {
    title: 'HomeCare Annual Plan',
    icon: () => (
      <div className="flex items-center gap-2">
        <Calendar className="w-5 h-5" />
        <Wrench className="w-5 h-5" />
      </div>
    ),
    points: ['Scheduled Inspections', 'Emergency Repairs', 'Handyman Access', 'Priority Scheduling'],
  },
  {
    title: 'Tech & Command Center',
    icon: () => (
      <div className="flex items-center gap-2">
        <Smartphone className="w-5 h-5" />
        <Radar className="w-5 h-5" />
      </div>
    ),
    points: ['24/7 Hotline', 'Mobile App', 'GPS Tracking', 'Digital Reporting', 'Access Control'],
  },
]

const ServiceCard = ({ title, IconSlot, points, idx }) => {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="group rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition overflow-hidden"
    >
      <button
        onClick={() => setOpen((s) => !s)}
        className="w-full text-left p-6 bg-gray-50/60 hover:bg-gray-50 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-[#0A1A2F] text-[#D4AF37] flex items-center justify-center">
            <IconSlot />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
        <span className="text-[#0A1A2F] font-bold">{open ? '−' : '+'}</span>
      </button>

      <div className={`px-6 pb-6 ${open ? 'block' : 'hidden'} sm:block`}>
        <ul className="mt-2 space-y-2 text-sm text-gray-700">
          {points.slice(0, 3).map((p) => (
            <li key={p} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
              {p}
            </li>
          ))}
        </ul>
        <a
          href="#learn-more"
          className="mt-4 inline-block text-[#0A1A2F] hover:text-[#D4AF37] font-semibold"
        >
          Learn More →
        </a>
      </div>
    </div>
  )
}

const ServicesGrid = () => {
  return (
    <section id="services" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1A2F]">
            Integrated Services
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl">
            One trusted partner for both physical security and property stewardship.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => (
            <ServiceCard
              key={s.title}
              title={s.title}
              IconSlot={s.icon}
              points={s.points}
              idx={idx}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid
