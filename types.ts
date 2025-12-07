import React from 'react';

// Interfaces de Dados
export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface ComparisonRow {
  technique: string;
  problem: string;
  solution: string;
}

export interface Ingredient {
  name: string;
  amount: string;
  benefit: string;
}

// Tipos para o Widget de Prova Social
export interface PurchaseMessage {
  type: 'purchase';
  name: string;
  location: string;
  action: string;
  time: string;
}

export interface MotivationalMessage {
  type: 'motivational';
  text: string;
}

export type SocialProofMessage = PurchaseMessage | MotivationalMessage;

// Declaração Global para o Facebook Pixel para evitar erros de TS
declare global {
  interface Window {
    fbq: (
      action: string,
      eventName: string,
      params?: Record<string, string | number>
    ) => void;
  }
}