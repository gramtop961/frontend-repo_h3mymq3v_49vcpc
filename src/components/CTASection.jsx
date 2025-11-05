import React from 'react'

const CTASection = () => {
  return (
    <section id="contact" className="bg-[#0A1A2F] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-extrabold">
                Secure Your Assets Today
              </h3>
              <p className="mt-3 text-white/80 max-w-2xl">
                Schedule a confidential consultation or explore elite career opportunities with our veteran-led team.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:justify-self-end">
              <a
                href="#consultation"
                className="inline-flex items-center justify-center rounded-md bg-[#D4AF37] px-5 py-3 font-semibold text-[#0A1A2F] hover:opacity-90 transition"
              >
                ✉️ Schedule a Consultation
              </a>
              <a
                href="#careers"
                className="inline-flex items-center justify-center rounded-md bg-white/10 px-5 py-3 font-semibold text-white hover:bg-white/20 transition"
              >
                💼 Careers: Join Our Elite Team
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-white/10 text-sm text-white/70">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2025 Serendib AssetGuard (Pvt) Ltd</p>
            <nav className="flex flex-wrap items-center gap-4">
              <a href="#services" className="hover:text-[#D4AF37]">Services</a>
              <a href="#app" className="hover:text-[#D4AF37]">App</a>
              <a href="#careers" className="hover:text-[#D4AF37]">Careers</a>
              <a href="#privacy" className="hover:text-[#D4AF37]">Privacy Policy</a>
            </nav>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default CTASection
