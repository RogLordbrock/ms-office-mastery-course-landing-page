
// Fix: Import React to resolve "Cannot find namespace 'React'" errors when using React.ReactNode
import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export interface CourseCardProps {
  title: string;
  description: string;
  items: string[];
  icon: React.ReactNode;
  borderColor: string;
  iconBg: string;
  iconColor: string;
}

export interface StatCardProps {
  value: string;
  label: string;
}
