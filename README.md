# KiwiLearn - Modern Interactive Learning Platform

A visually appealing, modern website for KiwiLearn - a supplementary learning platform for New Zealand kids, offering fun, interactive, and curriculum-aligned activities.

## 🎨 Design System Implementation

This website now properly implements the comprehensive design system provided by the design strategist, including:

### Colors
- **Primary**: #00BFAE (Teal) - Main brand color
- **Secondary**: #FFD600 (Yellow) - Accent and interactive elements
- **Accent**: #FF7043 (Orange) - Highlights and calls-to-action
- **Neutral**: #F5F5F5 (Light Gray) - Backgrounds and text
- **Semantic**: Success (#43A047), Warning (#FFB300), Error (#E53935)

### Typography
- **Primary Font**: Baloo 2 (Bold, friendly, child-appropriate)
- **Secondary Font**: Montserrat (Clean, readable body text)
- **Scale**: H1 (2.5rem) to Caption (0.875rem) with proper line heights

### Components
- **Buttons**: Rounded (24px), with hover animations and proper touch targets
- **Cards**: 16px border radius with hover effects and gradient borders
- **Forms**: 12px border radius with focus states and validation
- **Navigation**: Interactive hover states with smooth transitions

## ✨ Modern Features

### Animations & Interactions
- **GSAP Animations**: Smooth, professional animations for hero section and interactive elements
- **AOS (Animate On Scroll)**: Elements animate as they come into view
- **Hover Effects**: Cards lift and scale on hover with gradient borders
- **Floating Animation**: Hero image gently floats for visual interest
- **Progress Bars**: Animated progress indicators with shimmer effects

### Interactive Elements
- **Activity Cards**: Click to see feature previews with modals
- **Form Validation**: Real-time validation with error messages
- **Loading States**: Visual feedback during form submissions
- **Success Notifications**: Toast notifications for user feedback
- **Mobile Menu**: Animated mobile navigation with smooth transitions

### Accessibility
- **Keyboard Navigation**: Full keyboard support with focus management
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **High Contrast**: Design system ensures accessibility compliance
- **Large Touch Targets**: 48px minimum for mobile usability
- **Skip Links**: Quick navigation for assistive technologies

### Performance
- **Lazy Loading**: Images load as they come into view
- **Optimized Assets**: SVG illustrations for crisp scaling
- **Smooth Scrolling**: Native smooth scroll behavior
- **Debounced Events**: Performance-optimized event handling

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd kiwi-learn-website

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📁 Project Structure

```
src/
├── assets/           # SVG illustrations and images
│   ├── kiwi-logo.svg
│   ├── hero-kiwi.svg
│   └── about-fern.svg
├── css/
│   └── styles.css    # Design system implementation
├── js/
│   └── main.js       # Interactive features and animations
└── index.html        # Main HTML structure
```

## 🎯 Key Improvements Made

### 1. **Complete Design System Implementation**
- All colors, typography, and spacing from the design system are now properly implemented
- Consistent component styling across the entire website
- Proper responsive design with mobile-first approach

### 2. **Modern Interactive Features**
- GSAP animations for smooth, professional interactions
- AOS scroll animations for engaging user experience
- Interactive cards with hover effects and modals
- Real-time form validation with visual feedback

### 3. **Visual Assets**
- Custom SVG illustrations (kiwi logo, hero image, fern)
- New Zealand-themed design elements
- Proper color scheme implementation
- Professional visual hierarchy

### 4. **Enhanced User Experience**
- Smooth scrolling navigation
- Loading states and success notifications
- Mobile-responsive design
- Accessibility improvements

### 5. **Performance Optimizations**
- Lazy loading for images
- Optimized CSS with proper organization
- Efficient JavaScript with modern patterns
- Fast loading times

## 🎨 Design System Compliance

The website now fully adheres to the provided design system:

- ✅ **Colors**: All specified colors implemented with proper contrast
- ✅ **Typography**: Baloo 2 and Montserrat fonts with correct sizing
- ✅ **Spacing**: 8px grid system with proper component spacing
- ✅ **Components**: Buttons, cards, forms, and navigation match specifications
- ✅ **Accessibility**: High contrast, large touch targets, keyboard navigation
- ✅ **New Zealand Theme**: Kiwi and fern motifs throughout the design

## 🔧 Customization

### Adding New Components
1. Use the established CSS custom properties in `styles.css`
2. Follow the component patterns (buttons, cards, forms)
3. Implement proper accessibility features
4. Add animations using GSAP or CSS

### Modifying Colors
Update the CSS custom properties in `styles.css`:
```css
:root {
  --primary-main: #your-color;
  --secondary-main: #your-color;
  /* ... other colors */
}
```

### Adding Animations
Use the established animation classes or add new GSAP animations in `main.js`:
```javascript
gsap.from('.your-element', {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: 'power3.out'
});
```

## 📱 Responsive Design

The website is fully responsive with:
- **Mobile**: 320px+ (touch-optimized)
- **Tablet**: 768px+ (touch-friendly)
- **Desktop**: 1200px+ (full experience)

## 🌟 What Makes This Website Special

1. **Child-Friendly Design**: Rounded corners, bright colors, playful animations
2. **Educational Focus**: Clear information hierarchy and engaging content
3. **Modern Interactions**: Smooth animations and micro-interactions
4. **Accessibility First**: WCAG compliant with proper focus management
5. **Performance Optimized**: Fast loading and smooth interactions
6. **New Zealand Themed**: Cultural elements and local relevance

## 🚀 Future Enhancements

- [ ] User authentication system
- [ ] Interactive learning games
- [ ] Progress tracking dashboard
- [ ] Teacher/parent portals
- [ ] Real-time collaboration features
- [ ] Offline functionality
- [ ] Multi-language support

## 📄 License

MIT License - see LICENSE file for details

---

**KiwiLearn** - Making learning fun for New Zealand kids! 🇳🇿
