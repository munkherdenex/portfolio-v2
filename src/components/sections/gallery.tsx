'use client'

import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  { id: 1, src: '/img/photo1.JPG', alt: 'Photo 1' },
  { id: 2, src: '/img/photo2.jpg', alt: 'Photo 2' },
  { id: 4, src: '/img/photo4.jpg', alt: 'Photo 4' },
  { id: 5, src: '/img/photo5.JPG', alt: 'Photo 5' },
  { id: 7, src: '/img/photo7.jpg', alt: 'Photo 7' },
  { id: 8, src: '/img/photo8.JPG', alt: 'Photo 8' },
]

export function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const handlePrevious = () => {
    if (selectedImageIndex === null) return
    setSelectedImageIndex((selectedImageIndex - 1 + galleryImages.length) % galleryImages.length)
  }

  const handleNext = () => {
    if (selectedImageIndex === null) return
    setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length)
  }

  return (
    <section id="gallery" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-white">Gallery</h2>
        <p className="text-gray-300 mb-12 text-lg max-w-2xl">
          A collection of moments, travels, and experiences that inspire my creativity
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 cursor-pointer aspect-square"
              onClick={() => setSelectedImageIndex(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <span className="text-white font-semibold text-sm">View</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImageIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in"
            onClick={() => setSelectedImageIndex(null)}
          >
            <div className="relative max-w-4xl max-h-[85vh] w-full" onClick={(e) => e.stopPropagation()}>
              {/* Navigation Buttons */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all transform hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Image */}
              <img
                src={galleryImages[selectedImageIndex].src}
                alt={galleryImages[selectedImageIndex].alt}
                className="w-full h-full object-contain rounded-xl shadow-2xl"
              />

              {/* Navigation Buttons */}
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all transform hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-white hover:bg-white/20 p-2 rounded-full transition-all transform hover:scale-110 z-10"
                onClick={() => setSelectedImageIndex(null)}
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium">
                {selectedImageIndex + 1} / {galleryImages.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

