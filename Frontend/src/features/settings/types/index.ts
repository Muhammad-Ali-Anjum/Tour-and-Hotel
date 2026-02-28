export interface PaymentSettings {
  currency: string;
  taxRate: number;
  paymentMethods: string[];
}

export interface BookingRules {
  maxDaysAdvance: number;
  cancellationDeadlineHours: number;
  minStay?: number;
}

export interface StatusConfig {
  bookingStatuses: string[];
  paymentStatuses: string[];
}