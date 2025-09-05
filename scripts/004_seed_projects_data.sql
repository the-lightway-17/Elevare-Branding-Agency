-- Insert sample projects data
INSERT INTO public.projects (title, client, category, duration, description, image_url, services, results) VALUES
(
  'Modern Tech Startup Branding',
  'TechFlow Inc.',
  'Brand Identity',
  '6 weeks',
  'Complete brand identity design for a cutting-edge technology startup, including logo design, color palette, typography system, and brand guidelines.',
  '/modern-tech-startup-branding.jpg',
  ARRAY['Logo Design', 'Brand Guidelines', 'Color Palette', 'Typography'],
  '[{"metric": "Brand Recognition", "value": "85% increase"}, {"metric": "Customer Engagement", "value": "120% boost"}, {"metric": "Market Presence", "value": "3x expansion"}]'::jsonb
),
(
  'Premium Coffee Packaging Design',
  'Artisan Roasters',
  'Packaging Design',
  '4 weeks',
  'Elegant packaging design for premium coffee products, focusing on sustainability and shelf appeal while maintaining brand consistency.',
  '/premium-coffee-packaging-design.jpg',
  ARRAY['Packaging Design', 'Label Design', 'Brand Strategy'],
  '[{"metric": "Sales Increase", "value": "45% growth"}, {"metric": "Shelf Appeal", "value": "90% improvement"}, {"metric": "Brand Loyalty", "value": "60% increase"}]'::jsonb
),
(
  'Luxury Fashion Brand Identity',
  'Elegance Couture',
  'Brand Identity',
  '8 weeks',
  'Sophisticated brand identity for a luxury fashion house, including logo, monogram, pattern design, and comprehensive brand book.',
  '/luxury-fashion-brand-identity.jpg',
  ARRAY['Logo Design', 'Monogram Design', 'Pattern Design', 'Brand Book'],
  '[{"metric": "Brand Value", "value": "200% increase"}, {"metric": "Customer Base", "value": "150% growth"}, {"metric": "Market Position", "value": "Top 3 luxury brands"}]'::jsonb
),
(
  'Smart Home IoT Product Design',
  'HomeConnect',
  'Product Design',
  '10 weeks',
  'User-centered design for smart home IoT devices, including product design, user interface, and comprehensive user experience strategy.',
  '/smart-home-iot-product-design.jpg',
  ARRAY['Product Design', 'UI/UX Design', 'User Research', 'Prototyping'],
  '[{"metric": "User Satisfaction", "value": "95% rating"}, {"metric": "Market Adoption", "value": "300% faster"}, {"metric": "User Retention", "value": "80% improvement"}]'::jsonb
);
