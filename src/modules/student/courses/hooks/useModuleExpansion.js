"use client";

import { useState } from "react";

export function useModuleExpansion() {
    const [expandedModules, setExpandedModules] = useState(new Set());

    const toggleModule = (moduleId) => {
        const newExpanded = new Set(expandedModules);
        if (newExpanded.has(moduleId)) {
            newExpanded.delete(moduleId);
        } else {
            newExpanded.add(moduleId);
        }
        setExpandedModules(newExpanded);
    };

    const expandModule = (moduleId) => {
        setExpandedModules((prev) => new Set(prev).add(moduleId));
    };

    const collapseModule = (moduleId) => {
        setExpandedModules((prev) => {
            const newSet = new Set(prev);
            newSet.delete(moduleId);
            return newSet;
        });
    };

    return {
        expandedModules,
        toggleModule,
        expandModule,
        collapseModule,
    };
}