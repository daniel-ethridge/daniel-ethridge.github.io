import { Injectable } from '@angular/core';
import { getStorage, ref, listAll, getDownloadURL, StorageReference, getMetadata, getBlob } from 'firebase/storage';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private storage = getStorage();

  listFiles(): Observable<any[]> {
    const storageRef = ref(this.storage);
    return from(listAll(storageRef)).pipe(
      map(result => {
        return result.items.map(async (item: StorageReference) => {
          const url = await getDownloadURL(item);
          const metadata = await getMetadata(item);
          return {
            name: item.name,
            url: url,
            timestamp: metadata.timeCreated
          };
        });
      })
    );
  }

  async downloadFile(fileUrl: string, fileName: string): Promise<void> {
    try {
      const fileRef = ref(this.storage, fileName);
      const blob = await getBlob(fileRef);
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      link.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      throw new Error('Error downloading file');
    }
  }
}
