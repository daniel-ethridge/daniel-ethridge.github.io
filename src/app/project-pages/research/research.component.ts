import { Component } from '@angular/core';

interface ImageZoomState {
  zoomLevel: number;
  originX: number;
  originY: number;
  isZoomed: boolean;
}

@Component({
  selector: 'app-research',
  imports: [],
  templateUrl: './research.component.html',
  styleUrl: './research.component.css'
})
export class ResearchComponent {
  // Separate zoom states for each image
  imageStates: { [key: string]: ImageZoomState } = {
    'high-level': { zoomLevel: 1, originX: 50, originY: 50, isZoomed: false },
    'details': { zoomLevel: 1, originX: 50, originY: 50, isZoomed: false }
  };

  onImageClick(event: MouseEvent, imageId: string): void {
    const img = event.target as HTMLImageElement;
    const rect = img.getBoundingClientRect();
    const state = this.imageStates[imageId];
    
    if (!state.isZoomed) {
      // Calculate click position relative to image
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      
      // Calculate percentage position
      const xPercent = (x / rect.width) * 100;
      const yPercent = (y / rect.height) * 100;
      
      // Zoom in - scale by 1.5x centered on click point
      state.zoomLevel = 1.5;
      state.originX = xPercent;
      state.originY = yPercent;
      state.isZoomed = true;
      
      // Change cursor to zoom-out
      const container = img.parentElement;
      if (container) {
        container.style.cursor = 'zoom-out';
      }
    } else {
      // Zoom out - keep the same origin to avoid jumping
      state.zoomLevel = 1;
      // Don't reset origin immediately, let CSS transition finish
      state.isZoomed = false;
      
      // Change cursor back to zoom-in
      const container = img.parentElement;
      if (container) {
        container.style.cursor = 'zoom-in';
      }
      
      // Reset origin after transition completes
      setTimeout(() => {
        if (!state.isZoomed) {
          state.originX = 50;
          state.originY = 50;
        }
      }, 300);
    }
  }

  getTransform(imageId: string): string {
    return `scale(${this.imageStates[imageId].zoomLevel})`;
  }

  getTransformOrigin(imageId: string): string {
    const state = this.imageStates[imageId];
    return `${state.originX}% ${state.originY}%`;
  }
}
