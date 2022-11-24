// NOTE: Best-practice is to follow naming convention of .service.ts
// NOTE: also create shared 'services' folder inside /app

import { Injectable } from '@angular/core';

// NOTE: THERE IS NO @SERVICE ANGULAR SYNTAX - JUST A TYPESCRIPT CLASS
@Injectable({ providedIn: 'root' })
export class LoggingService {
  logToConsole(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
