import React from 'react'
import { Shield, Clock, BadgeCheck, Building } from 'lucide-react'

const items = [
  { icon: Shield, label: 'Veteran-Led' },
  { icon: BadgeCheck, label: 'ISO-Aligned Protocols' },
  { icon: Clock, label: '24/7 Command Center' },
  { icon: Building, label: 'Fully Insured Personnel' },
]

const TrustBadges = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A1A2F] text-[#D4AF37]">
                <Icon className="h-5 w-5" />
              </div>
              <p className="font-semibold text-gray-800 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBadges
