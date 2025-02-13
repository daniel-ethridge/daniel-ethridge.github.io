import { Component, OnInit } from '@angular/core';
import { FileService } from '../services/file.service';

interface StorageFile {
  name: string;
  url: string;
  timestamp: string;
}

@Component({
  selector: 'app-lit-sync',
  templateUrl: './lit-sync.component.html',
  styleUrls: ['./lit-sync.component.css']
})
export class LitSyncComponent implements OnInit {
  files: StorageFile[] = [];
  loading: boolean = true;
  errorMessage: string = '';

  constructor(private fileService: FileService) {}

  ngOnInit() {
    this.loadFiles();
  }

  async loadFiles() {
    try {
      const filesPromiseArray = await this.fileService.listFiles().toPromise();
      if (filesPromiseArray) {
        this.files = await Promise.all(filesPromiseArray);
        this.files.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
      }
    } catch (error) {
      this.errorMessage = 'Error loading files';
      console.error('Error:', error);
    } finally {
      this.loading = false;
    }
  }

  async downloadFile(file: StorageFile) {
    try {
      await this.fileService.downloadFile(file.url, file.name);
    } catch (error) {
      this.errorMessage = 'Error downloading file';
      console.error('Error:', error);
    }
  }
}
