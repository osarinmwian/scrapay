"use client";
import React, { useState } from 'react';

import Sidebar from '@/component/SIdeBar';

export default function Dashboard() {
  return (
    <div className="h-screen flex d-justify-center bg-black items-center align-center">
      <Sidebar/>
    </div>
  );
}