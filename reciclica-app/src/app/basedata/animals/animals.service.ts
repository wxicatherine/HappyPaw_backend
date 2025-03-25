import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../../../config/supabase.service';

@Injectable()
export class AnimalsService {
  constructor(private readonly supabaseService: SupabaseService) {}

  // Отримати всіх тварин
  async findAll() {
    const { data, error } = await this.supabaseService.getClient()
      .from('animals')
      .select(`
        *,
        shelters (name, location),
        species (name)
      `);
  
    if (error) throw error;
    return data;
  }
  

  // Отримати тварину по ID разом із притулком (shelter)
  async findOne(id: string) {
    const { data, error } = await this.supabaseService.getClient()
      .from('animals')
      .select(`
        *,
        shelters (name, location)
      `) // Додаємо зв’язок із shelters
      .eq('animal_id', id)
      .single();

    if (error) throw error;
    return data;
  }

  // Додати нову тварину
  async create(animalDto: any) {
    // Переконуємося, що shelter_id існує
    const { data: shelter, error: shelterError } = await this.supabaseService.getClient()
      .from('shelters')
      .select('shelter_id')
      .eq('shelter_id', animalDto.shelter_id)
      .single();
  
    if (!shelter || shelterError) throw new Error('Притулок не знайдено');
  
    // Додаємо тварину
    const { data, error } = await this.supabaseService.getClient()
      .from('animals')
      .insert([animalDto])
      .select()
      .single();
  
    if (error) throw error;
    return data;
  }
  
  // Оновити тварину
  async update(id: string, animalDto: any) {
    const { data, error } = await this.supabaseService.getClient()
      .from('animals')
      .update(animalDto)
      .eq('animal_id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  // Видалити тварину
  async delete(id: string) {
    // Видаляємо всі adoption_requests, де є ця тварина
    await this.supabaseService.getClient()
      .from('adoption_requests')
      .delete()
      .eq('animal_id', id);
  
    // Видаляємо саму тварину
    const { error } = await this.supabaseService.getClient()
      .from('animals')
      .delete()
      .eq('animal_id', id);
  
    if (error) throw error;
    return { message: 'Тварину та пов’язані записи видалено' };
  }
}
