import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor(private configService: ConfigService) {
    this.supabase = createClient(
      this.configService.get<string>('https://qhngnslbrbdzwxtuxlmf.supabase.co'),
      this.configService.get<string>('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFobmduc2xicmJkend4dHV4bG1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1NzY2NDAsImV4cCI6MjA1NjE1MjY0MH0.j9t_m_O1qkcx_TavvQxinwxX8ZjvnWXMLlOjGJ8NlYc'),
    );
  }

  getClient(): SupabaseClient {
    return this.supabase;
  }
}
