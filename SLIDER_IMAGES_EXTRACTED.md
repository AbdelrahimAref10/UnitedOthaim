# Slider Images Extracted from Consulting Theme Website

Based on the network requests from https://consulting.stylemixthemes.com/amsterdam/, here are the slider/hero images found:

## Hero Slider Images

### Image 1
- **URL**: `https://consulting.stylemixthemes.com/amsterdam/wp-content/uploads/sites/24/2018/03/bg3.jpg?id=2145`
- **Suggested filename**: `hero-slide-1.jpg`
- **Path in project**: `src/assets/images/hero-slide-1.jpg`

### Image 2
- **URL**: `https://consulting.stylemixthemes.com/amsterdam/wp-content/uploads/sites/24/2018/03/bg2.jpg?id=1867`
- **Suggested filename**: `hero-slide-2.jpg`
- **Path in project**: `src/assets/images/hero-slide-2.jpg`

### Image 3
- **URL**: `https://consulting.stylemixthemes.com/amsterdam/wp-content/uploads/sites/24/2018/03/img3.jpg`
- **Suggested filename**: `hero-slide-3.jpg`
- **Path in project**: `src/assets/images/hero-slide-3.jpg`

### Additional Image Found
- **URL**: `https://consulting.stylemixthemes.com/amsterdam/wp-content/uploads/sites/24/2018/03/img2.jpg`
- **Suggested filename**: `hero-slide-4.jpg` (backup option)
- **Path in project**: `src/assets/images/hero-slide-4.jpg`

## Other Useful Images Found

### About Section Image
- **URL**: `https://consulting.stylemixthemes.com/amsterdam/wp-content/uploads/sites/24/2020/08/about.jpg`
- **Suggested filename**: `about-section.jpg`
- **Path in project**: `src/assets/images/about-section.jpg`

### Featured Case Image
- **URL**: `https://consulting.stylemixthemes.com/amsterdam/wp-content/uploads/sites/24/2020/08/03.jpg`
- **Suggested filename**: `featured-case.jpg`
- **Path in project**: `src/assets/images/featured-case.jpg`

### News Images
- **URL**: `https://consulting.stylemixthemes.com/amsterdam/wp-content/uploads/sites/24/2015/12/news-grid-2-1-700x500.jpg`
- **Suggested filename**: `news/news-1.jpg`
- **Path in project**: `src/assets/images/news/news-1.jpg`

### Testimonial Image
- **URL**: `https://consulting.stylemixthemes.com/amsterdam/wp-content/uploads/sites/24/2016/01/testimonials1.jpg`
- **Suggested filename**: `testimonials/testimonial-1.jpg`
- **Path in project**: `src/assets/images/testimonials/testimonial-1.jpg`

## How to Download These Images

### Option 1: Direct Download (Recommended)
You can download these images directly by:
1. Right-clicking on each URL above
2. Opening in a new tab
3. Right-clicking the image and selecting "Save Image As"
4. Save to the appropriate directory in your project

### Option 2: Using Command Line (PowerShell)
```powershell
# Navigate to images directory
cd UnitedOthaim\src\assets\images

# Download slider images
Invoke-WebRequest -Uri "https://consulting.stylemixthemes.com/amsterdam/wp-content/uploads/sites/24/2018/03/bg3.jpg?id=2145" -OutFile "hero-slide-1.jpg"
Invoke-WebRequest -Uri "https://consulting.stylemixthemes.com/amsterdam/wp-content/uploads/sites/24/2018/03/bg2.jpg?id=1867" -OutFile "hero-slide-2.jpg"
Invoke-WebRequest -Uri "https://consulting.stylemixthemes.com/amsterdam/wp-content/uploads/sites/24/2018/03/img3.jpg" -OutFile "hero-slide-3.jpg"

# Download about section image
Invoke-WebRequest -Uri "https://consulting.stylemixthemes.com/amsterdam/wp-content/uploads/sites/24/2020/08/about.jpg" -OutFile "about-section.jpg"

# Download featured case image
Invoke-WebRequest -Uri "https://consulting.stylemixthemes.com/amsterdam/wp-content/uploads/sites/24/2020/08/03.jpg" -OutFile "featured-case.jpg"

# Download news image
New-Item -ItemType Directory -Force -Path "news" | Out-Null
Invoke-WebRequest -Uri "https://consulting.stylemixthemes.com/amsterdam/wp-content/uploads/sites/24/2015/12/news-grid-2-1-700x500.jpg" -OutFile "news\news-1.jpg"

# Download testimonial image
New-Item -ItemType Directory -Force -Path "testimonials" | Out-Null
Invoke-WebRequest -Uri "https://consulting.stylemixthemes.com/amsterdam/wp-content/uploads/sites/24/2016/01/testimonials1.jpg" -OutFile "testimonials\testimonial-1.jpg"
```

### Option 3: Browser Extension
Use a browser extension like "Image Downloader" to download all images from the page at once.

## Notes
- These images are from the consulting theme demo website
- Make sure you have proper licensing/permission to use these images
- Consider optimizing images for web (compression) after downloading
- The images may need resizing to match your requirements (1920x1080px for hero slides)

## Image Specifications
- **Hero Slider Images**: Should be 1920x1080px (Full HD) for best quality
- **About Section**: 1200x800px recommended
- **Featured Case**: 1200x800px recommended
- **News Images**: 600x400px recommended
- **Testimonial Images**: 300x300px (square) recommended
