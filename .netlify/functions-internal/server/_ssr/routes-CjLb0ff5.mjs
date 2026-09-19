import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as X, i as Search, n as GitCompareArrows, r as Printer } from "./router-Dy-Jg2OD.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as DialogOverlay$1, c as Slot, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CjLb0ff5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function BrandMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className: cn("size-9 shrink-0", className),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "32",
				height: "32",
				rx: "6",
				className: "fill-bg-elevated"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "1.25",
				y: "1.25",
				width: "29.5",
				height: "29.5",
				rx: "5",
				className: "fill-none stroke-lldpe",
				strokeWidth: "1.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "8",
				y: "7",
				width: "5",
				height: "18",
				className: "fill-hdpe"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "19",
				y: "7",
				width: "5",
				height: "18",
				className: "fill-hdpe"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "8",
				y: "13.5",
				width: "16",
				height: "5",
				className: "fill-hdpe"
			})
		]
	});
}
var familyStyle = {
	HDPE: {
		bar: "bg-hdpe",
		badge: "bg-hdpe text-accent-fg",
		soft: "bg-hdpe-soft text-hdpe",
		text: "text-hdpe",
		border: "border-hdpe"
	},
	LLDPE: {
		bar: "bg-lldpe",
		badge: "bg-lldpe text-accent-fg",
		soft: "bg-lldpe-soft text-lldpe",
		text: "text-lldpe",
		border: "border-lldpe"
	},
	PP: {
		bar: "bg-pp",
		badge: "bg-pp text-accent-fg",
		soft: "bg-pp-soft text-pp",
		text: "text-pp",
		border: "border-pp"
	}
};
function PropTable({ rows }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
		className: "w-full text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
			className: "border-b border-border text-left text-xs font-medium uppercase tracking-wide text-fg-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "py-2 pr-3 font-medium",
					children: "Property"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "py-2 pr-3 font-medium",
					children: "Unit"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "py-2 text-right font-medium",
					children: "Typical"
				})
			]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
			className: "border-b border-border last:border-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
					className: "py-2 pr-3 align-top text-fg",
					children: [row.label, row.method ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-fg-muted",
						children: row.method
					}) : null]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "py-2 pr-3 align-top whitespace-nowrap text-fg-muted",
					children: row.unit
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "py-2 text-right align-top font-mono tabular-nums text-fg",
					children: row.value
				})
			]
		}, row.label)) })]
	});
}
function ProcessTable({ rows }) {
	if (rows.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
		className: "w-full text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
			className: "border-b border-border text-left text-xs font-medium uppercase tracking-wide text-fg-muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
				className: "py-2 pr-3 font-medium",
				children: "Condition"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
				className: "py-2 text-right font-medium",
				children: "Window"
			})]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
			className: "border-b border-border last:border-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: "py-2 pr-3 text-fg",
				children: row.label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: "py-2 text-right font-mono tabular-nums text-fg",
				children: row.value
			})]
		}, row.label)) })]
	});
}
function CompareTable({ left, right, leftName, rightName }) {
	const labels = Array.from(/* @__PURE__ */ new Set([...left.map((r) => r.label), ...right.map((r) => r.label)]));
	const leftMap = new Map(left.map((r) => [r.label, r]));
	const rightMap = new Map(right.map((r) => [r.label, r]));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
		className: "w-full text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
			className: "border-b border-border text-left text-xs font-medium uppercase tracking-wide text-fg-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "py-2 pr-3 font-medium",
					children: "Property"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "py-2 pr-3 text-right font-medium",
					children: leftName
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "py-2 text-right font-medium",
					children: rightName
				})
			]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: labels.map((label) => {
			const a = leftMap.get(label);
			const b = rightMap.get(label);
			const differ = Boolean(a && b && a.value !== b.value);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "border-b border-border last:border-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
						className: "py-2 pr-3 align-top",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs text-fg-muted",
							children: [a?.unit ?? b?.unit ?? "", a?.method || b?.method ? ` · ${a?.method ?? b?.method}` : ""]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: cn("py-2 pr-3 text-right align-top font-mono tabular-nums", differ && "font-medium text-hdpe"),
						children: a?.value ?? "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: cn("py-2 text-right align-top font-mono tabular-nums", differ && "font-medium text-hdpe"),
						children: b?.value ?? "—"
					})
				]
			}, label);
		}) })]
	});
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogTitle = DialogTitle$1;
var DialogDescription = DialogDescription$1;
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		className: cn("fixed inset-0 z-50 bg-bg-ink/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
		...props
	});
}
function DialogContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		className: cn("fixed left-1/2 top-1/2 z-50 flex max-h-[92vh] w-[min(1120px,calc(100vw-1.5rem))] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-xl border border-border bg-bg-elevated shadow-[var(--shadow-sheet)] outline-none", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
			className: "absolute right-3 top-3 inline-flex size-11 items-center justify-center rounded-sm text-fg-muted transition-colors hover:bg-bg hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function CompareSheet({ left, right }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "print-sheet flex min-h-0 flex-1 flex-col overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "shrink-0 border-b border-border bg-bg px-5 py-4 pr-14 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-wide text-fg-muted",
					children: "Side-by-side sheets"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
					className: "mt-1 font-display text-2xl font-medium tracking-tight text-fg sm:text-3xl",
					children: [
						left.name,
						" and ",
						right.name
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					className: "mt-1 text-sm text-fg-muted",
					children: "Differing typical values are marked in red."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-8 sm:py-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-4 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompareHead, { grade: left }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompareHead, { grade: right })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "print-break mt-6 rounded-md border border-border bg-bg px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-2 text-xs font-medium uppercase tracking-wide text-fg-muted",
						children: "Typical properties"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompareTable, {
						left: left.properties,
						right: right.properties,
						leftName: left.name,
						rightName: right.name
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid grid-cols-1 gap-4 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "print-break rounded-md border border-border bg-bg px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "mb-2 text-xs font-medium uppercase tracking-wide text-fg-muted",
							children: ["Processing · ", left.name]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessTable, { rows: left.processing })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "print-break rounded-md border border-border bg-bg px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "mb-2 text-xs font-medium uppercase tracking-wide text-fg-muted",
							children: ["Processing · ", right.name]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessTable, { rows: right.processing })]
					})]
				})
			]
		})]
	});
}
function CompareHead({ grade }) {
	const tone = familyStyle[grade.family];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md border border-border bg-bg p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("rounded-xs px-2 py-1 text-xs font-medium uppercase tracking-wide", tone.soft),
				children: grade.family
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-2 font-display text-xl font-medium text-fg",
				children: grade.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-fg-muted",
				children: grade.category
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-3 grid grid-cols-2 gap-2 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-xs uppercase tracking-wide text-fg-subtle",
					children: "MFI"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "font-mono tabular-nums",
					children: grade.mfi
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-xs uppercase tracking-wide text-fg-subtle",
					children: "Density"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "font-mono tabular-nums",
					children: grade.density
				})] })]
			}),
			grade.bis ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-mono text-xs text-fg-muted",
				children: grade.bis
			}) : null
		]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-accent text-accent-fg hover:bg-accent/90",
			ink: "bg-bg-ink text-accent-fg hover:bg-bg-ink/90",
			outline: "border border-border-strong bg-bg-elevated text-fg hover:bg-bg",
			ghost: "text-fg hover:bg-bg-elevated",
			family: "border border-transparent data-[active=true]:text-accent-fg"
		},
		size: {
			default: "h-11 rounded-sm px-4 text-sm",
			sm: "h-9 rounded-sm px-3 text-xs",
			lg: "h-12 rounded-md px-5 text-sm",
			icon: "size-11 rounded-sm"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function GradeCard({ grade, selected, onOpen, onCompare }) {
	const tone = familyStyle[grade.family];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "print-break flex h-full min-h-0 flex-col overflow-hidden rounded-lg border border-border bg-bg-elevated shadow-[var(--shadow-sheet)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("h-1.5 w-full", tone.bar) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col gap-4 p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-wide text-fg-muted",
							children: grade.brand
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-display text-2xl font-medium tracking-tight text-fg",
							children: grade.name
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("shrink-0 rounded-xs px-2 py-1 text-xs font-medium uppercase tracking-wide", tone.soft),
						children: grade.family
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-fg",
					children: grade.category
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "line-clamp-2 text-sm leading-relaxed text-fg-muted",
					children: grade.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "grid grid-cols-2 gap-3 border-y border-border py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs uppercase tracking-wide text-fg-subtle",
							children: "MFI"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
							className: "mt-1 font-mono text-sm tabular-nums text-fg",
							children: [
								grade.mfi,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-fg-muted",
									children: "g/10 min"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "text-xs text-fg-subtle",
							children: grade.mfiCondition
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs uppercase tracking-wide text-fg-subtle",
							children: "Density"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
							className: "mt-1 font-mono text-sm tabular-nums text-fg",
							children: [
								grade.density,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-fg-muted",
									children: "g/cm³"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "text-xs text-fg-subtle",
							children: grade.technology
						})
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "line-clamp-2 text-sm leading-relaxed text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-fg-muted",
						children: "Uses · "
					}), grade.applications]
				}),
				grade.flags.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-wrap gap-1.5",
					children: grade.flags.slice(0, 3).map((flag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-xs border border-border bg-bg px-2 py-1 text-xs text-fg-muted",
						children: flag
					}, flag))
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto flex gap-2 pt-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						className: "flex-1",
						onClick: onOpen,
						children: "Open sheet"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						variant: selected ? "ink" : "outline",
						className: "flex-1",
						onClick: onCompare,
						"aria-pressed": selected,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitCompareArrows, {}), selected ? "Selected" : "Compare"]
					})]
				})
			]
		})]
	});
}
function GradeDetail({ grade }) {
	const tone = familyStyle[grade.family];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "print-sheet flex min-h-0 flex-1 flex-col overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "shrink-0 border-b border-border bg-bg px-5 py-4 pr-14 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-wide text-fg-muted",
						children: "Technical data sheet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "mt-1 font-display text-3xl font-medium tracking-tight text-fg",
						children: grade.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
						className: "mt-1 text-sm text-fg-muted",
						children: [
							grade.brand,
							" · ",
							grade.family,
							" · ",
							grade.technology
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("rounded-xs px-3 py-1.5 text-xs font-medium uppercase tracking-wide", tone.badge),
						children: grade.brand
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						className: "no-print",
						onClick: () => window.print(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {}), "Print"]
					})]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-8 sm:py-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-3xl text-sm leading-relaxed text-fg",
					children: grade.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 max-w-3xl text-sm leading-relaxed text-fg-muted",
					children: [
						"Recommended for ",
						grade.applications,
						"."
					]
				}),
				grade.bis ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 font-mono text-xs text-fg",
					children: ["BIS designation · ", grade.bis]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid grid-cols-1 gap-6 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "print-break rounded-md border border-border bg-bg px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-2 text-xs font-medium uppercase tracking-wide text-fg-muted",
							children: "Typical properties"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PropTable, { rows: grade.properties })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "print-break flex flex-col gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-md border border-border bg-bg px-4 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mb-2 text-xs font-medium uppercase tracking-wide text-fg-muted",
									children: "Suggested processing"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessTable, { rows: grade.processing })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-md border border-border bg-bg px-4 py-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mb-2 text-xs font-medium uppercase tracking-wide text-fg-muted",
										children: "Application"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm leading-relaxed text-fg",
										children: grade.applications
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 text-sm text-fg-muted",
										children: [
											grade.category,
											" · ",
											grade.technology
										]
									})
								]
							}),
							grade.flags.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "flex flex-wrap gap-1.5",
								children: grade.flags.map((flag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "rounded-xs border border-border bg-bg px-2 py-1 text-xs text-fg-muted",
									children: flag
								}, flag))
							}) : null
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-3xl text-xs leading-relaxed text-fg-subtle",
					children: "Typical values of representative samples — not a specification of supplied product. Mechanical properties follow the specimen method noted on the originating ARDC sheet. Not recommended for Single Use Plastic items listed under the Plastics Waste Management Rules. Compliance certificates and MSDS on request."
				})
			]
		})]
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-sm border border-border bg-bg-elevated px-3 text-sm text-fg placeholder:text-fg-subtle outline-none transition-colors duration-150 focus-visible:border-border-strong focus-visible:ring-2 focus-visible:ring-ring", className),
		...props
	});
}
var hdpeGrades = [
	{
		id: "hd-t9",
		name: "HD T9",
		family: "HDPE",
		brand: "Halene H",
		technology: "Spherilene",
		category: "Raffia / Stretched Tape",
		summary: "HDPE stretched tape / raffia grade with excellent processability and mechanical strength.",
		applications: "Stretched tape / raffia for woven fabrics and tarpaulin",
		bis: "IS 7328-3B-TB-EDA",
		mfi: "1.1",
		mfiCondition: "2.16 kg, 190°C",
		density: "0.950",
		properties: [
			{
				label: "MFI (2.16 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "1.1"
			},
			{
				label: "MFI (5 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "3"
			},
			{
				label: "MFI (21.6 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "27"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.950"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "26"
			},
			{
				label: "Tensile Strength at Break",
				method: "ASTM D638",
				unit: "MPa",
				value: "38"
			},
			{
				label: "Elongation at Yield",
				method: "ASTM D638",
				unit: "%",
				value: "11"
			},
			{
				label: "Elongation at Break",
				method: "ASTM D638",
				unit: "%",
				value: "1100"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "400"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "1100"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "127"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "133"
			},
			{
				label: "Hardness",
				method: "ASTM D2240",
				unit: "Shore D",
				value: "61"
			}
		],
		processing: [
			{
				label: "Barrel Temperature",
				value: "200 – 240 °C"
			},
			{
				label: "Die Temperature",
				value: "230 – 250 °C"
			},
			{
				label: "Quench Temperature",
				value: "30 °C"
			}
		],
		flags: ["Food contact", "IS 7328:2020"]
	},
	{
		id: "hd-t10",
		name: "HD T10",
		family: "HDPE",
		brand: "Halene H",
		technology: "Spherilene",
		category: "Yarn / Monofilament",
		summary: "HDPE yarn / monofilament grade with excellent processability and mechanical strength.",
		applications: "Yarns / monofilament for fabrics, nets, twines and ropes",
		bis: "IS 7328-3B-LBO-EDA",
		mfi: "1.1",
		mfiCondition: "2.16 kg, 190°C",
		density: "0.950",
		properties: [
			{
				label: "MFI (2.16 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "1.1"
			},
			{
				label: "MFI (5 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "3"
			},
			{
				label: "MFI (21.6 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "27"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.950"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "26"
			},
			{
				label: "Tensile Strength at Break",
				method: "ASTM D638",
				unit: "MPa",
				value: "38"
			},
			{
				label: "Elongation at Yield",
				method: "ASTM D638",
				unit: "%",
				value: "11"
			},
			{
				label: "Elongation at Break",
				method: "ASTM D638",
				unit: "%",
				value: "1100"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "400"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "1000"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "127"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "133"
			},
			{
				label: "Hardness",
				method: "ASTM D2240",
				unit: "Shore D",
				value: "61"
			}
		],
		processing: [
			{
				label: "Barrel Temperature",
				value: "200 – 240 °C"
			},
			{
				label: "Die Temperature",
				value: "230 – 250 °C"
			},
			{
				label: "Quench Temperature",
				value: "30 °C"
			},
			{
				label: "Stretching Temperature",
				value: "95 – 120 °C"
			}
		],
		flags: ["Food contact", "IS 7328:2020"]
	},
	{
		id: "hd-t10s",
		name: "HD T10S",
		family: "HDPE",
		brand: "Halene H",
		technology: "Spherilene",
		category: "Monofilament",
		summary: "HDPE monofilament grade with excellent processability and mechanical strength.",
		applications: "Monofilament for nets, twines and ropes",
		bis: "IS 7328-3B-LB-EDA",
		mfi: "1.1",
		mfiCondition: "2.16 kg, 190°C",
		density: "0.950",
		properties: [
			{
				label: "MFI (2.16 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "1.1"
			},
			{
				label: "MFI (5 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "3"
			},
			{
				label: "MFI (21.6 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "27"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.950"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "26"
			},
			{
				label: "Tensile Strength at Break",
				method: "ASTM D638",
				unit: "MPa",
				value: "38"
			},
			{
				label: "Elongation at Yield",
				method: "ASTM D638",
				unit: "%",
				value: "11"
			},
			{
				label: "Elongation at Break",
				method: "ASTM D638",
				unit: "%",
				value: "1100"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "400"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "1000"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "127"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "131"
			},
			{
				label: "Hardness",
				method: "ASTM D2240",
				unit: "Shore D",
				value: "61"
			}
		],
		processing: [
			{
				label: "Barrel Temperature",
				value: "200 – 240 °C"
			},
			{
				label: "Die Temperature",
				value: "230 – 250 °C"
			},
			{
				label: "Quench Temperature",
				value: "30 °C"
			},
			{
				label: "Stretching Temperature",
				value: "~ 98 °C (Water)"
			}
		],
		flags: ["Food contact", "IS 7328:2020"]
	},
	{
		id: "m5002l",
		name: "M5002L",
		family: "HDPE",
		brand: "Halene H",
		technology: "Spherilene",
		category: "Injection / Caps & Closures",
		summary: "Narrow MWD HDPE for injection and extrusion-compression molded caps & closures. Superior processability, excellent organoleptics.",
		applications: "Injection and extrusion-compression molded caps & closures",
		bis: "IS 7328-3B-CB-EDB",
		mfi: "3",
		mfiCondition: "2.16 kg, 190°C",
		density: "0.950",
		properties: [
			{
				label: "MFI (2.16 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "3"
			},
			{
				label: "MFI (5 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "8"
			},
			{
				label: "MFI (21.6 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "70"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.950"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "25"
			},
			{
				label: "Tensile Strength at Break",
				method: "ASTM D638",
				unit: "MPa",
				value: "30"
			},
			{
				label: "Elongation at Break",
				method: "ASTM D638",
				unit: "%",
				value: "900"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "180"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "950"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "70"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "125"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "132"
			},
			{
				label: "Hardness",
				method: "ASTM D2240",
				unit: "Shore D",
				value: "61"
			}
		],
		processing: [{
			label: "Barrel Temperature",
			value: "160 – 190 °C"
		}],
		flags: [
			"Food contact",
			"Narrow MWD",
			"Organoleptics"
		]
	},
	{
		id: "m5005l",
		name: "M5005L",
		family: "HDPE",
		brand: "Halene H",
		technology: "Spherilene",
		category: "Injection Molding",
		summary: "Narrow MWD HDPE for heavy-duty crates, industrial products, and caps for packaged drinking water.",
		applications: "Heavy-duty crates, industrial products, injection / ECM caps for packaged drinking water",
		bis: "IS 7328-3B-MB-EDC",
		mfi: "4.5",
		mfiCondition: "2.16 kg, 190°C",
		density: "0.950",
		properties: [
			{
				label: "MFI (2.16 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "4.5"
			},
			{
				label: "MFI (5 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "10"
			},
			{
				label: "MFI (21.6 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "110"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.950"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "22"
			},
			{
				label: "Tensile Strength at Break",
				method: "ASTM D638",
				unit: "MPa",
				value: "31"
			},
			{
				label: "Elongation at Break",
				method: "ASTM D638",
				unit: "%",
				value: "900"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "100"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "850"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "70"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "124"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "132"
			},
			{
				label: "Hardness",
				method: "ASTM D2240",
				unit: "Shore D",
				value: "62"
			}
		],
		processing: [{
			label: "Barrel Temperature",
			value: "185 – 235 °C"
		}, {
			label: "Nozzle Temperature",
			value: "235 °C"
		}],
		flags: [
			"Food contact",
			"Narrow MWD",
			"Crates"
		]
	},
	{
		id: "m5018l",
		name: "M5018L",
		family: "HDPE",
		brand: "Halene H",
		technology: "Spherilene",
		category: "Injection Molding",
		summary: "General-purpose injection molding HDPE combining excellent processability with good mechanical properties.",
		applications: "General purpose injection molding",
		bis: "IS 7328-3B-MB-EDE",
		mfi: "20",
		mfiCondition: "2.16 kg, 190°C",
		density: "0.950",
		properties: [
			{
				label: "MFI (2.16 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "20"
			},
			{
				label: "MFI (5 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "50"
			},
			{
				label: "MFI (21.6 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "450"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.950"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "22"
			},
			{
				label: "Elongation at Yield",
				method: "ASTM D638",
				unit: "%",
				value: "10"
			},
			{
				label: "Elongation at Break",
				method: "ASTM D638",
				unit: "%",
				value: "450"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "35"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "800"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "64"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "121"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "132"
			},
			{
				label: "Hardness",
				method: "ASTM D2240",
				unit: "Shore D",
				value: "62"
			}
		],
		processing: [{
			label: "Barrel Temperature",
			value: "180 – 235 °C"
		}, {
			label: "Nozzle Temperature",
			value: "235 °C"
		}],
		flags: ["Food contact", "High flow"]
	},
	{
		id: "m5025l",
		name: "M5025L",
		family: "HDPE",
		brand: "Halene H",
		technology: "Spherilene",
		category: "Injection / Masterbatch",
		summary: "High-flow injection molding HDPE for general-purpose items and masterbatch applications.",
		applications: "General purpose injection molded items and masterbatch",
		mfi: "30.0",
		mfiCondition: "2.16 kg, 190°C",
		density: "0.950",
		properties: [
			{
				label: "MFI (2.16 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "30.0"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.950"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "20"
			},
			{
				label: "Elongation at Break",
				method: "ASTM D638",
				unit: "%",
				value: "250"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "28"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "800"
			},
			{
				label: "Hardness",
				method: "ASTM D2240",
				unit: "Shore D",
				value: "62"
			},
			{
				label: "Spiral Flow Length @ 235°C",
				method: "HPL Method",
				unit: "mm",
				value: "730"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "125"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "77"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "132"
			}
		],
		processing: [{
			label: "Barrel Temperature",
			value: "180 – 235 °C"
		}, {
			label: "Nozzle Temperature",
			value: "235 °C"
		}],
		flags: ["High flow", "Masterbatch"]
	},
	{
		id: "m6007l",
		name: "M6007L",
		family: "HDPE",
		brand: "Halene H",
		technology: "Spherilene",
		category: "Injection Molding",
		summary: "Narrow MWD HDPE ideally suited for injection molding of heavy-duty crates and industrial products.",
		applications: "Heavy-duty crates and industrial products",
		bis: "IS 7328-3B-MB-EDD",
		mfi: "7.5",
		mfiCondition: "2.16 kg, 190°C",
		density: "0.950",
		properties: [
			{
				label: "MFI (2.16 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "7.5"
			},
			{
				label: "MFI (5 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "22"
			},
			{
				label: "MFI (21.6 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "190"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.950"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "24"
			},
			{
				label: "Elongation at Break",
				method: "ASTM D638",
				unit: "%",
				value: "750"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "50"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "850"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "67"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "122"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "132"
			},
			{
				label: "Hardness",
				method: "ASTM D2240",
				unit: "Shore D",
				value: "62"
			}
		],
		processing: [{
			label: "Barrel Temperature",
			value: "185 – 235 °C"
		}, {
			label: "Nozzle Temperature",
			value: "200 – 235 °C"
		}],
		flags: [
			"Food contact",
			"Narrow MWD",
			"Crates"
		]
	},
	{
		id: "m6007lu",
		name: "M6007LU",
		family: "HDPE",
		brand: "Halene H",
		technology: "Spherilene",
		category: "Injection Molding (UV)",
		summary: "UV-stabilized (HALS ~2000 ppm) narrow MWD HDPE for outdoor crates and industrial products.",
		applications: "Heavy-duty crates and industrial products with outdoor exposure",
		bis: "IS 7328-3B-MD-EDD",
		mfi: "7.5",
		mfiCondition: "2.16 kg, 190°C",
		density: "0.950",
		properties: [
			{
				label: "MFI (2.16 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "7.5"
			},
			{
				label: "MFI (5 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "22"
			},
			{
				label: "MFI (21.6 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "190"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.950"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "24"
			},
			{
				label: "Elongation at Break",
				method: "ASTM D638",
				unit: "%",
				value: "800"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "50"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "850"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "67"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "122"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "132"
			},
			{
				label: "Hardness",
				method: "ASTM D2240",
				unit: "Shore D",
				value: "62"
			}
		],
		processing: [{
			label: "Barrel Temperature",
			value: "185 – 235 °C"
		}, {
			label: "Nozzle Temperature",
			value: "200 – 235 °C"
		}],
		flags: [
			"Food contact",
			"UV / HALS",
			"Outdoor"
		]
	},
	{
		id: "b5500",
		name: "B5500",
		family: "HDPE",
		brand: "Halene H",
		technology: "Mitsui CX",
		category: "Blow Molding (HMHDPE)",
		summary: "HMHDPE blow molding grade with exceptional processability, high rigidity, mechanical strength and impact resistance.",
		applications: "Medium bulk containers (~120 L) for chemicals, detergent, lube oils; water tanks up to 1000 L (add UV for outdoor)",
		bis: "IS 7328-3B-BB-FXTA",
		mfi: "0.06",
		mfiCondition: "2.16 kg, 190°C",
		density: "0.952",
		properties: [
			{
				label: "MFI (2.16 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "0.06"
			},
			{
				label: "MFI (5 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "0.35"
			},
			{
				label: "MFI (21.6 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "8"
			},
			{
				label: "Density (23°C, Annealed)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.952"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "27"
			},
			{
				label: "Elongation at Yield",
				method: "ASTM D638",
				unit: "%",
				value: "9"
			},
			{
				label: "Tensile Strength at Break",
				method: "ASTM D638",
				unit: "MPa",
				value: "40"
			},
			{
				label: "Elongation at Break",
				method: "ASTM D638",
				unit: "%",
				value: "900"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "500"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "1000"
			},
			{
				label: "Hardness",
				method: "ASTM D2240",
				unit: "Shore D",
				value: "64"
			},
			{
				label: "ESCR (F50, 10% Igepal)",
				method: "ASTM D1693B",
				unit: "hr",
				value: ">1000"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "127"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "63"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "133"
			}
		],
		processing: [
			{
				label: "Barrel Temperature",
				value: "200 / 210 / 215 / 210 °C"
			},
			{
				label: "Die Temperature",
				value: "200 – 210 °C"
			},
			{
				label: "Parison Temperature",
				value: "190 – 210 °C"
			},
			{
				label: "Cooling Water for Mold",
				value: "20 – 25 °C"
			}
		],
		flags: [
			"Food contact",
			"High ESCR",
			"HMHDPE"
		]
	},
	{
		id: "b6401",
		name: "B6401",
		family: "HDPE",
		brand: "Halene H",
		technology: "Mitsui CX",
		category: "Blow Molding",
		summary: "HDPE blow molding grade combining exceptional processability with high rigidity, mechanical properties and impact resistance.",
		applications: "Up to 20 L containers for lubricants and edible oils",
		bis: "IS 7328-3P-BB-GXDA",
		mfi: "0.40",
		mfiCondition: "2.16 kg, 190°C",
		density: "0.960",
		properties: [
			{
				label: "MFI (2.16 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "0.40"
			},
			{
				label: "MFI (5 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "1.6"
			},
			{
				label: "MFI (21.6 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "25"
			},
			{
				label: "Density (23°C, Annealed)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.960"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "32"
			},
			{
				label: "Elongation at Yield",
				method: "ASTM D638",
				unit: "%",
				value: "9"
			},
			{
				label: "Tensile Strength at Break",
				method: "ASTM D638",
				unit: "MPa",
				value: "40"
			},
			{
				label: "Elongation at Break",
				method: "ASTM D638",
				unit: "%",
				value: "1000"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "300"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "1300"
			},
			{
				label: "Hardness",
				method: "ASTM D2240",
				unit: "Shore D",
				value: "68"
			},
			{
				label: "ESCR (F50, 10% Igepal)",
				method: "ASTM D1693B",
				unit: "hr",
				value: "<20"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "129"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "70"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "135"
			}
		],
		processing: [
			{
				label: "Barrel Temperature",
				value: "150 / 160 / 165 / 175 °C"
			},
			{
				label: "Die Temperature",
				value: "180 – 185 °C"
			},
			{
				label: "Parison Temperature",
				value: "185 – 190 °C"
			},
			{
				label: "Cooling Water for Mold",
				value: "20 – 25 °C"
			}
		],
		flags: ["Food contact", "High rigidity"]
	},
	{
		id: "e5201",
		name: "E5201",
		family: "HDPE",
		brand: "Halene H",
		technology: "Mitsui CX",
		category: "Blow / Extrusion / Film",
		summary: "Broad MWD HDPE with exceptional processability, high ESCR and excellent mechanical properties.",
		applications: "High ESCR blow molding, cable sheathing & jacketing, lamination film, GP film and extrusion",
		bis: "IS 7328-3B-BB-EXDA",
		mfi: "0.35",
		mfiCondition: "2.16 kg, 190°C",
		density: "0.950",
		properties: [
			{
				label: "MFI (2.16 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "0.35"
			},
			{
				label: "MFI (5 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "1.6"
			},
			{
				label: "MFI (21.6 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "32"
			},
			{
				label: "Density (23°C, Annealed)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.950"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "25"
			},
			{
				label: "Elongation at Yield",
				method: "ASTM D638",
				unit: "%",
				value: "7"
			},
			{
				label: "Tensile Strength at Break",
				method: "ASTM D638",
				unit: "MPa",
				value: "34"
			},
			{
				label: "Elongation at Break",
				method: "ASTM D638",
				unit: "%",
				value: "850"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "120"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "1000"
			},
			{
				label: "Hardness",
				method: "ASTM D2240",
				unit: "Shore D",
				value: "65"
			},
			{
				label: "ESCR (F50, 10% Igepal)",
				method: "ASTM D1693B",
				unit: "hr",
				value: ">600"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "122"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "60"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "130"
			}
		],
		processing: [
			{
				label: "Barrel Temperature",
				value: "150 – 160 °C"
			},
			{
				label: "Die Temperature",
				value: "160 – 165 °C"
			},
			{
				label: "Parison Temperature",
				value: "160 – 170 °C"
			},
			{
				label: "Cooling Water for Mold",
				value: "20 – 25 °C"
			}
		],
		flags: [
			"Food contact",
			"High ESCR",
			"Broad MWD"
		]
	},
	{
		id: "e5201s",
		name: "E5201S",
		family: "HDPE",
		brand: "Halene H",
		technology: "Mitsui CX",
		category: "Blow / Pipe",
		summary: "Broad MWD HDPE for general-purpose blow molding, DWC pipes and general-purpose pipe.",
		applications: "General purpose blow molding, double-walled corrugated pipes, GP pipe",
		bis: "IS 7328-3B-BB-FXDA",
		mfi: "0.35",
		mfiCondition: "2.16 kg, 190°C",
		density: "0.954",
		properties: [
			{
				label: "MFI (2.16 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "0.35"
			},
			{
				label: "MFI (5 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "1.6"
			},
			{
				label: "MFI (21.6 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "32"
			},
			{
				label: "Density (23°C, Annealed)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.954"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "25"
			},
			{
				label: "Elongation at Yield",
				method: "ASTM D638",
				unit: "%",
				value: "9"
			},
			{
				label: "Tensile Strength at Break",
				method: "ASTM D638",
				unit: "MPa",
				value: "36"
			},
			{
				label: "Elongation at Break",
				method: "ASTM D638",
				unit: "%",
				value: "900"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "100"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "1100"
			},
			{
				label: "Hardness",
				method: "ASTM D2240",
				unit: "Shore D",
				value: "65"
			},
			{
				label: "ESCR (F50, 10% Igepal)",
				method: "ASTM D1693B",
				unit: "hr",
				value: "250"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "125"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "70"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "130"
			}
		],
		processing: [
			{
				label: "Barrel Temperature",
				value: "150 – 160 °C"
			},
			{
				label: "Die Temperature",
				value: "160 – 165 °C"
			},
			{
				label: "Parison Temperature",
				value: "165 – 170 °C"
			},
			{
				label: "Cooling Water for Mold",
				value: "20 – 25 °C"
			}
		],
		flags: [
			"Food contact",
			"Pipe",
			"Broad MWD"
		]
	},
	{
		id: "f5400",
		name: "F5400",
		family: "HDPE",
		brand: "Halene H",
		technology: "Mitsui CX",
		category: "Film (HMHDPE)",
		summary: "HMHDPE film grade with excellent processability and high mechanical strength.",
		applications: "General purpose film and very thin reinforced bag applications",
		bis: "IS 7328-3B-FB-FXTA",
		mfi: "0.09",
		mfiCondition: "2.16 kg, 190°C",
		density: "0.952",
		properties: [
			{
				label: "MFI (2.16 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "0.09"
			},
			{
				label: "MFI (5 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "0.50"
			},
			{
				label: "MFI (21.6 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "14"
			},
			{
				label: "Density (23°C, Annealed)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.952"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "28"
			},
			{
				label: "Tensile Strength at Break",
				method: "ASTM D638",
				unit: "MPa",
				value: "40"
			},
			{
				label: "Elongation at Break",
				method: "ASTM D638",
				unit: "%",
				value: "900"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "180"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "950"
			},
			{
				label: "Hardness",
				method: "ASTM D2240",
				unit: "Shore D",
				value: "65"
			},
			{
				label: "ESCR (F50, 10% Igepal)",
				method: "ASTM D1693B",
				unit: "hr",
				value: ">500"
			},
			{
				label: "Dart Impact Strength",
				method: "ASTM D1709A",
				unit: "g",
				value: "80"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "124"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "131"
			}
		],
		processing: [{
			label: "Barrel Temperature",
			value: "180 – 220 °C"
		}, {
			label: "BUR",
			value: "4 – 6"
		}],
		flags: [
			"Food contact",
			"HMHDPE",
			"Film"
		]
	},
	{
		id: "hd-t6",
		name: "HD T6",
		family: "HDPE",
		brand: "Halene H",
		technology: "Mitsui CX",
		category: "Extrusion / Lamination Film",
		summary: "General purpose extrusion and lamination film grade combining good processability with high mechanical strength.",
		applications: "Lamination films, woven sacks and tarpaulin",
		bis: "IS 7328-3P-FB-GXDA",
		mfi: "0.50",
		mfiCondition: "2.16 kg, 190°C",
		density: "0.960",
		properties: [
			{
				label: "MFI (2.16 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "0.50"
			},
			{
				label: "MFI (5 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "1.8"
			},
			{
				label: "MFI (21.6 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "30"
			},
			{
				label: "Density (23°C, Annealed)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.960"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "30"
			},
			{
				label: "Tensile Strength at Break",
				method: "ASTM D638",
				unit: "MPa",
				value: "38"
			},
			{
				label: "Elongation at Break",
				method: "ASTM D638",
				unit: "%",
				value: "800"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "250"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "1150"
			},
			{
				label: "Hardness",
				method: "ASTM D2240",
				unit: "Shore D",
				value: "65"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "124"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "131"
			}
		],
		processing: [
			{
				label: "Barrel Temperature",
				value: "200 – 240 °C"
			},
			{
				label: "Die Temperature",
				value: "220 – 240 °C"
			},
			{
				label: "Quench Temperature",
				value: "25 °C"
			}
		],
		flags: ["Food contact", "Lamination"]
	},
	{
		id: "m5600s",
		name: "M5600S",
		family: "HDPE",
		brand: "Halene H",
		technology: "Mitsui CX",
		category: "Caps & Closures",
		summary: "Broad MWD HDPE for injection and compression molded CSD / beverage caps. Contains slip agent for torque release.",
		applications: "Caps & closures for CSD, water, juice and beverages",
		bis: "IS 7328-3B-CBF-FXDA",
		mfi: "0.7",
		mfiCondition: "2.16 kg, 190°C",
		density: "0.954",
		properties: [
			{
				label: "MFI (2.16 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "0.7"
			},
			{
				label: "MFI (5 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "2.7"
			},
			{
				label: "Density (23°C, Annealed)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.954"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "26"
			},
			{
				label: "Elongation at Yield",
				method: "ASTM D638",
				unit: "%",
				value: "9"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "75"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "950"
			},
			{
				label: "ESCR (F50, 10% Igepal)",
				method: "ASTM D1693B",
				unit: "hr",
				value: "750"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "125"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "68"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "131"
			}
		],
		processing: [{
			label: "Barrel Temperature",
			value: "160 – 190 °C"
		}],
		flags: [
			"Food contact",
			"Slip agent",
			"High ESCR"
		]
	},
	{
		id: "m5601",
		name: "M5601",
		family: "HDPE",
		brand: "Halene H",
		technology: "Mitsui CX",
		category: "Caps & Closures",
		summary: "Broad MWD HDPE for CSD / beverage caps. No slip agent. High ESCR and good organoleptics.",
		applications: "Caps & closures for CSD, water, juice and beverages",
		bis: "IS 7328-3B-CB-FXDA",
		mfi: "1.2",
		mfiCondition: "2.16 kg, 190°C",
		density: "0.954",
		properties: [
			{
				label: "MFI (2.16 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "1.2"
			},
			{
				label: "MFI (5 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "5.0"
			},
			{
				label: "Density (23°C, Annealed)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.954"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "28"
			},
			{
				label: "Elongation at Yield",
				method: "ASTM D638",
				unit: "%",
				value: "9.5"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "50"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "1000"
			},
			{
				label: "ESCR (F50, 10% Igepal)",
				method: "ASTM D1693B",
				unit: "hr",
				value: "400"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "124"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "67"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "131"
			}
		],
		processing: [{
			label: "Barrel Temperature",
			value: "160 – 190 °C"
		}],
		flags: [
			"Food contact",
			"No slip",
			"High ESCR"
		]
	},
	{
		id: "m5601s",
		name: "M5601S",
		family: "HDPE",
		brand: "Halene H",
		technology: "Mitsui CX",
		category: "Caps & Closures",
		summary: "Broad MWD HDPE for CSD / beverage caps with slip agent for better torque release.",
		applications: "Caps & closures for CSD, water, juice and beverages",
		bis: "IS 7328-3B-CBF-FXDA",
		mfi: "1.2",
		mfiCondition: "2.16 kg, 190°C",
		density: "0.954",
		properties: [
			{
				label: "MFI (2.16 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "1.2"
			},
			{
				label: "MFI (5 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "5.0"
			},
			{
				label: "Density (23°C, Annealed)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.954"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "28"
			},
			{
				label: "Elongation at Yield",
				method: "ASTM D638",
				unit: "%",
				value: "9.5"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "50"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "1000"
			},
			{
				label: "ESCR (F50, 10% Igepal)",
				method: "ASTM D1693B",
				unit: "hr",
				value: "400"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "124"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "67"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "131"
			}
		],
		processing: [{
			label: "Barrel Temperature",
			value: "160 – 190 °C"
		}],
		flags: [
			"Food contact",
			"Slip agent",
			"High ESCR"
		]
	},
	{
		id: "m5818",
		name: "M5818",
		family: "HDPE",
		brand: "Halene H",
		technology: "Mitsui CX",
		category: "Injection Molding",
		summary: "Injection molding HDPE combining excellent processability with good mechanical properties.",
		applications: "General purpose injection molded items",
		mfi: "19.0",
		mfiCondition: "2.16 kg, 190°C",
		density: "0.956",
		properties: [
			{
				label: "MFI (2.16 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "19.0"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.956"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "24"
			},
			{
				label: "Elongation at Break",
				method: "ASTM D638",
				unit: "%",
				value: "350"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "36"
			},
			{
				label: "Hardness",
				method: "ASTM D2240",
				unit: "Shore D",
				value: "64"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "131"
			}
		],
		processing: [{
			label: "Barrel Temperature",
			value: "180 – 235 °C"
		}, {
			label: "Nozzle Temperature",
			value: "235 °C"
		}],
		flags: ["High flow"]
	},
	{
		id: "p5100",
		name: "P5100",
		family: "HDPE",
		brand: "Halene H",
		technology: "Mitsui CX",
		category: "Pipe (PE 80)",
		summary: "HDPE pipe grade with excellent processability, creep resistance, ESCR and mechanical properties.",
		applications: "PE 80 compliant pressure pipes",
		bis: "IS 7328-3B-PB-FXTA",
		mfi: "0.09",
		mfiCondition: "2.16 kg, 190°C",
		density: "0.952",
		properties: [
			{
				label: "MFI (2.16 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "0.09"
			},
			{
				label: "MFI (5 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "0.50"
			},
			{
				label: "MFI (21.6 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "14"
			},
			{
				label: "Density (23°C, Annealed)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.952"
			},
			{
				label: "Density (27°C, Annealed)",
				method: "IS 4984",
				unit: "g/cm³",
				value: "0.948"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "25"
			},
			{
				label: "Tensile Strength at Break",
				method: "ASTM D638",
				unit: "MPa",
				value: "38"
			},
			{
				label: "Elongation at Break",
				method: "ASTM D638",
				unit: "%",
				value: "900"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "200"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "1000"
			},
			{
				label: "Hardness",
				method: "ASTM D2240",
				unit: "Shore D",
				value: "65"
			},
			{
				label: "ESCR (F50, 10% Igepal)",
				method: "ASTM D1693B",
				unit: "hr",
				value: ">500"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "125"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "64"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "131"
			},
			{
				label: "Oxidative Induction Time",
				method: "ASTM D3895",
				unit: "min",
				value: ">30"
			}
		],
		processing: [{
			label: "Barrel Temperature",
			value: "160 – 180 °C"
		}, {
			label: "Die Temperature",
			value: "170 – 190 °C"
		}],
		flags: [
			"Food contact",
			"PE 80",
			"Pipe"
		]
	},
	{
		id: "p5200",
		name: "P5200",
		family: "HDPE",
		brand: "Halene H",
		technology: "Mitsui CX",
		category: "Pipe (PE 63)",
		summary: "HDPE pipe grade with excellent processability, creep resistance, ESCR and mechanical properties.",
		applications: "PE 63 compliant pressure pipes",
		bis: "IS 7328-3B-PB-EXTA",
		mfi: "0.20",
		mfiCondition: "2.16 kg, 190°C",
		density: "0.950",
		properties: [
			{
				label: "MFI (2.16 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "0.20"
			},
			{
				label: "MFI (5 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "0.90"
			},
			{
				label: "MFI (21.6 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "22"
			},
			{
				label: "Density (23°C, Annealed)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.950"
			},
			{
				label: "Density (27°C, Annealed)",
				method: "IS 4984",
				unit: "g/cm³",
				value: "0.948"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "25"
			},
			{
				label: "Elongation at Yield",
				method: "ASTM D638",
				unit: "%",
				value: "8"
			},
			{
				label: "Tensile Strength at Break",
				method: "ASTM D638",
				unit: "MPa",
				value: "38"
			},
			{
				label: "Elongation at Break",
				method: "ASTM D638",
				unit: "%",
				value: "900"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "175"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "1000"
			},
			{
				label: "Hardness",
				method: "ASTM D2240",
				unit: "Shore D",
				value: "65"
			},
			{
				label: "ESCR (F50, 10% Igepal)",
				method: "ASTM D1693B",
				unit: "hr",
				value: ">1000"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "123"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "64"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "131"
			},
			{
				label: "Oxidative Induction Time",
				method: "ASTM D3895",
				unit: "min",
				value: ">30"
			}
		],
		processing: [{
			label: "Barrel Temperature",
			value: "150 – 180 °C"
		}, {
			label: "Die Temperature",
			value: "170 – 180 °C"
		}],
		flags: [
			"Food contact",
			"PE 63",
			"Pipe",
			"High ESCR"
		]
	},
	{
		id: "p5200uv",
		name: "P5200UV",
		family: "HDPE",
		brand: "Halene H",
		technology: "Mitsui CX",
		category: "Pipe / Telecom Duct (UV)",
		summary: "HALS-stabilized HDPE pipe grade for long outdoor service. Recommended for telecom ducts.",
		applications: "Telecom ducts and outdoor PE 63 pipe applications",
		bis: "IS 7328-3B-PD-EXTA",
		mfi: "0.20",
		mfiCondition: "2.16 kg, 190°C",
		density: "0.950",
		properties: [
			{
				label: "MFI (2.16 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "0.20"
			},
			{
				label: "MFI (5 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "0.90"
			},
			{
				label: "MFI (21.6 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "20"
			},
			{
				label: "Density (23°C, Annealed)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.950"
			},
			{
				label: "Density (27°C, Annealed)",
				method: "IS 4984",
				unit: "g/cm³",
				value: "0.948"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "25"
			},
			{
				label: "Elongation at Yield",
				method: "ASTM D638",
				unit: "%",
				value: "8"
			},
			{
				label: "Tensile Strength at Break",
				method: "ASTM D638",
				unit: "MPa",
				value: "38"
			},
			{
				label: "Elongation at Break",
				method: "ASTM D638",
				unit: "%",
				value: "900"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "175"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "1000"
			},
			{
				label: "Hardness",
				method: "ASTM D2240",
				unit: "Shore D",
				value: "65"
			},
			{
				label: "ESCR (F50, 10% Igepal)",
				method: "ASTM D1693B",
				unit: "hr",
				value: ">1000"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "125"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "64"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "131"
			},
			{
				label: "Oxidative Induction Time",
				method: "ASTM D3895",
				unit: "min",
				value: ">30"
			}
		],
		processing: [{
			label: "Barrel Temperature",
			value: "150 – 180 °C"
		}, {
			label: "Die Temperature",
			value: "170 – 180 °C"
		}],
		flags: [
			"Food contact",
			"UV / HALS",
			"Telecom duct"
		]
	},
	{
		id: "p5300",
		name: "P5300",
		family: "HDPE",
		brand: "Halene H",
		technology: "Mitsui CX",
		category: "Pipe (PE 100)",
		summary: "PE 100 pipe grade (MRS 10 MPa, ISO 9080 / ISO 12162) with high ESCR, creep resistance and RCP performance.",
		applications: "PE 100 pressure pipes",
		bis: "IS 7328-3B-PBK-EXTA",
		mfi: "0.05",
		mfiCondition: "2.16 kg, 190°C",
		density: "0.950",
		properties: [
			{
				label: "MFI (2.16 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "0.05"
			},
			{
				label: "MFI (5 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "0.25"
			},
			{
				label: "MFI (21.6 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "9.5"
			},
			{
				label: "Density (23°C, Annealed)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.950"
			},
			{
				label: "Density (27°C, Annealed)",
				method: "IS 4984",
				unit: "g/cm³",
				value: "0.948"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "26"
			},
			{
				label: "Elongation at Yield",
				method: "ASTM D638",
				unit: "%",
				value: "11"
			},
			{
				label: "Tensile Strength at Break",
				method: "ASTM D638",
				unit: "MPa",
				value: "40"
			},
			{
				label: "Elongation at Break",
				method: "ASTM D638",
				unit: "%",
				value: "900"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "270"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "1000"
			},
			{
				label: "Hardness",
				method: "ASTM D2240",
				unit: "Shore D",
				value: "65"
			},
			{
				label: "ESCR (F50, 10% Igepal)",
				method: "ASTM D1693B",
				unit: "hr",
				value: ">1000"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "125"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "70"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "131"
			},
			{
				label: "Oxidative Induction Time",
				method: "ASTM D3895",
				unit: "min",
				value: ">30"
			},
			{
				label: "RCP Critical Pressure (0°C)",
				method: "ISO 13477",
				unit: "bar",
				value: "≥10"
			}
		],
		processing: [{
			label: "Barrel Temperature",
			value: "160 – 220 °C"
		}, {
			label: "Die Temperature",
			value: "180 – 220 °C"
		}],
		flags: [
			"Food contact",
			"PE 100",
			"Pipe",
			"High ESCR"
		]
	},
	{
		id: "r5801",
		name: "R5801",
		family: "HDPE",
		brand: "Halene H",
		technology: "Mitsui CX",
		category: "Raffia / Stretched Tape",
		summary: "HDPE raffia grade combining excellent processability with high mechanical strength.",
		applications: "Stretched tape / raffia for woven sacks and tarpaulin",
		bis: "IS 7328-3P-TB-GXDA",
		mfi: "0.50",
		mfiCondition: "2.16 kg, 190°C",
		density: "0.960",
		properties: [
			{
				label: "MFI (2.16 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "0.50"
			},
			{
				label: "MFI (5 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "1.8"
			},
			{
				label: "MFI (21.6 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "30"
			},
			{
				label: "Density (23°C, Annealed)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.960"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "32"
			},
			{
				label: "Tensile Strength at Break",
				method: "ASTM D638",
				unit: "MPa",
				value: "38"
			},
			{
				label: "Elongation at Break",
				method: "ASTM D638",
				unit: "%",
				value: "800"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "200"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "1150"
			},
			{
				label: "Hardness",
				method: "ASTM D2240",
				unit: "Shore D",
				value: "65"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "124"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "131"
			}
		],
		processing: [
			{
				label: "Barrel Temperature",
				value: "200 – 240 °C"
			},
			{
				label: "Die Temperature",
				value: "220 – 240 °C"
			},
			{
				label: "Quench Temperature",
				value: "25 – 30 °C"
			}
		],
		flags: ["Food contact", "Raffia"]
	}
];
var lldpeGrades = [
	{
		id: "71501s",
		name: "71501S",
		family: "LLDPE",
		brand: "Halene L",
		technology: "Spherilene",
		category: "Blown Film",
		summary: "LLDPE blown film grade additivated with slip and anti-blocking agents for excellent openability.",
		applications: "General purpose packaging film",
		bis: "IS 7328-2B-FBH-BDA",
		mfi: "1.0",
		mfiCondition: "2.16 kg, 190°C",
		density: "0.922",
		properties: [
			{
				label: "MFI (2.16 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "1.0"
			},
			{
				label: "MFI (5 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "2.6"
			},
			{
				label: "MFI (21.6 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "23"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.922"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "126"
			},
			{
				label: "Tensile at Yield MD / TD",
				method: "ASTM D882",
				unit: "MPa",
				value: "10 / 10"
			},
			{
				label: "Tensile at Break MD / TD",
				method: "ASTM D882",
				unit: "MPa",
				value: "25 / 16"
			},
			{
				label: "Elongation at Break MD / TD",
				method: "ASTM D882",
				unit: "%",
				value: "650 / 750"
			},
			{
				label: "Elmendorf Tear MD / TD",
				method: "ASTM D1922",
				unit: "g/μ",
				value: "6 / 16"
			},
			{
				label: "Dart Impact F50",
				method: "ASTM D1709A",
				unit: "g/μ",
				value: "4.0"
			},
			{
				label: "Gloss at 60°",
				method: "ASTM D2457",
				unit: "GU",
				value: "76"
			}
		],
		processing: [
			{
				label: "Barrel Temperature",
				value: "180 – 200 °C"
			},
			{
				label: "Melt Temperature",
				value: "190 – 210 °C"
			},
			{
				label: "Blow up Ratio",
				value: "2.0 – 3.0"
			},
			{
				label: "Die Gap",
				value: "2.0 – 2.5 mm"
			}
		],
		flags: [
			"Food contact",
			"Slip + antiblock",
			"Film"
		]
	},
	{
		id: "71601d",
		name: "71601D",
		family: "LLDPE",
		brand: "Halene L",
		technology: "Spherilene",
		category: "Drip Lateral Pipe",
		summary: "LLDPE additivated for excellent processability in drip lateral pipes, with controlled morphology.",
		applications: "Drip lateral pipes",
		bis: "IS 7328-2B-NB-BDA",
		mfi: "1.0",
		mfiCondition: "2.16 kg, 190°C",
		density: "0.920",
		properties: [
			{
				label: "MFI (2.16 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "1.0"
			},
			{
				label: "MFI (5 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "2.8"
			},
			{
				label: "MFI (21.6 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "23"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.920"
			},
			{
				label: "Tensile Strength at Break",
				method: "ASTM D638",
				unit: "MPa",
				value: "30"
			},
			{
				label: "Elongation at Break",
				method: "ASTM D638",
				unit: "%",
				value: "1000"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "500"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "400"
			},
			{
				label: "ESCR (F50, 10% Igepal)",
				method: "ASTM D1693B",
				unit: "hr",
				value: "1000"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "125"
			}
		],
		processing: [{
			label: "Barrel Temperature",
			value: "200 – 240 °C"
		}, {
			label: "Die Temperature",
			value: "240 – 250 °C"
		}],
		flags: [
			"Food contact",
			"Drip irrigation",
			"High ESCR"
		]
	},
	{
		id: "71601w",
		name: "71601W",
		family: "LLDPE",
		brand: "Halene L",
		technology: "Spherilene",
		category: "Blown Film / Lamination",
		summary: "LLDPE blown film grade without slip or antiblocking additives, for adhesive lamination films.",
		applications: "General purpose adhesive lamination films",
		bis: "IS 7328-2B-FBE-BDA",
		mfi: "1.0",
		mfiCondition: "2.16 kg, 190°C",
		density: "0.920",
		properties: [
			{
				label: "MFI (2.16 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "1.0"
			},
			{
				label: "MFI (5 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "2.6"
			},
			{
				label: "MFI (21.6 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "23"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.920"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "125"
			},
			{
				label: "Tensile at Yield MD / TD",
				method: "ASTM D882",
				unit: "MPa",
				value: "10 / 10"
			},
			{
				label: "Tensile at Break MD / TD",
				method: "ASTM D882",
				unit: "MPa",
				value: "25 / 16"
			},
			{
				label: "Elongation at Break MD / TD",
				method: "ASTM D882",
				unit: "%",
				value: "650 / 750"
			},
			{
				label: "Elmendorf Tear MD / TD",
				method: "ASTM D1922",
				unit: "g/μ",
				value: "6 / 16"
			},
			{
				label: "Dart Impact F50",
				method: "ASTM D1709A",
				unit: "g/μ",
				value: "4.0"
			},
			{
				label: "Gloss at 60°",
				method: "ASTM D2457",
				unit: "GU",
				value: "76"
			}
		],
		processing: [
			{
				label: "Barrel Temperature",
				value: "180 – 200 °C"
			},
			{
				label: "Melt Temperature",
				value: "190 – 210 °C"
			},
			{
				label: "Blow up Ratio",
				value: "2.0 – 3.0"
			},
			{
				label: "Die Gap",
				value: "2.0 – 2.5 mm"
			}
		],
		flags: [
			"Food contact",
			"No slip",
			"Lamination"
		]
	},
	{
		id: "71602s",
		name: "71602S",
		family: "LLDPE",
		brand: "Halene L",
		technology: "Spherilene",
		category: "Blown Film",
		summary: "Higher-flow LLDPE blown film grade with slip and antiblock for good openability.",
		applications: "General purpose packaging film",
		bis: "IS 7328-2B-FBH-BDB",
		mfi: "2.0",
		mfiCondition: "2.16 kg, 190°C",
		density: "0.920",
		properties: [
			{
				label: "MFI (2.16 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "2.0"
			},
			{
				label: "MFI (5 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "6.0"
			},
			{
				label: "MFI (21.6 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "60"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.920"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "125"
			},
			{
				label: "Tensile at Yield MD / TD",
				method: "ASTM D882",
				unit: "MPa",
				value: "11 / 10"
			},
			{
				label: "Tensile at Break MD / TD",
				method: "ASTM D882",
				unit: "MPa",
				value: "19 / 14"
			},
			{
				label: "Elongation at Break MD / TD",
				method: "ASTM D882",
				unit: "%",
				value: "700 / 750"
			},
			{
				label: "Elmendorf Tear MD / TD",
				method: "ASTM D1922",
				unit: "g/μ",
				value: "4 / 12"
			},
			{
				label: "Dart Impact F50",
				method: "ASTM D1709A",
				unit: "g/μ",
				value: "3"
			}
		],
		processing: [
			{
				label: "Barrel Temperature",
				value: "170 – 200 °C"
			},
			{
				label: "Melt Temperature",
				value: "190 – 200 °C"
			},
			{
				label: "Blow up Ratio",
				value: "2.0 – 3.0"
			},
			{
				label: "Die Gap",
				value: "2.0 – 2.5 mm"
			}
		],
		flags: [
			"Food contact",
			"Slip + antiblock",
			"Film"
		]
	},
	{
		id: "71602w",
		name: "71602W",
		family: "LLDPE",
		brand: "Halene L",
		technology: "Spherilene",
		category: "Blown Film",
		summary: "Higher-flow LLDPE film grade without slip or antiblock, for general purpose packaging film.",
		applications: "General purpose packaging film",
		bis: "IS 7328-2B-FBE-BDB",
		mfi: "2.5",
		mfiCondition: "2.16 kg, 190°C",
		density: "0.920",
		properties: [
			{
				label: "MFI (2.16 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "2.5"
			},
			{
				label: "MFI (5 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "6.5"
			},
			{
				label: "MFI (21.6 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "60"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.920"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "125"
			},
			{
				label: "Tensile at Yield MD / TD",
				method: "ASTM D882",
				unit: "MPa",
				value: "12 / 11"
			},
			{
				label: "Tensile at Break MD / TD",
				method: "ASTM D882",
				unit: "MPa",
				value: "23 / 19"
			},
			{
				label: "Elongation at Break MD / TD",
				method: "ASTM D882",
				unit: "%",
				value: "500 / 750"
			},
			{
				label: "Elmendorf Tear MD / TD",
				method: "ASTM D1922",
				unit: "g/μ",
				value: "2.5 / 11"
			},
			{
				label: "Dart Impact F50",
				method: "ASTM D1709A",
				unit: "g/μ",
				value: "2"
			}
		],
		processing: [
			{
				label: "Barrel Temperature",
				value: "170 – 200 °C"
			},
			{
				label: "Melt Temperature",
				value: "190 – 200 °C"
			},
			{
				label: "Blow up Ratio",
				value: "2.0 – 3.0"
			},
			{
				label: "Die Gap",
				value: "2.0 – 2.5 mm"
			}
		],
		flags: [
			"Food contact",
			"No slip",
			"Film"
		]
	},
	{
		id: "72307e",
		name: "72307E",
		family: "LLDPE",
		brand: "Halene L",
		technology: "Spherilene",
		category: "Extrusion Coating",
		summary: "High-flow LLDPE for extrusion coating on woven fabric, aluminium foil, jute, paper and allied substrates.",
		applications: "Extrusion coating on HDPE woven fabric, foil, jute, paper",
		bis: "IS 7328-2B-HB-CDD",
		mfi: "7.0",
		mfiCondition: "2.16 kg, 190°C",
		density: "0.926",
		properties: [
			{
				label: "MFI (2.16 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "7.0"
			},
			{
				label: "MFI (5 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "19.0"
			},
			{
				label: "MFI (21.6 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "165"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.926"
			},
			{
				label: "Tensile Strength at Break",
				method: "ASTM D638",
				unit: "MPa",
				value: "18"
			},
			{
				label: "Elongation at Break",
				method: "ASTM D638",
				unit: "%",
				value: "500"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "500"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "300"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "102"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "126"
			}
		],
		processing: [{
			label: "Barrel Temperature",
			value: "200 – 270 °C"
		}, {
			label: "Die Temperature",
			value: "250 – 280 °C"
		}],
		flags: [
			"Food contact",
			"Coating",
			"High flow"
		]
	},
	{
		id: "73005t",
		name: "73005T",
		family: "LLDPE",
		brand: "Halene L",
		technology: "Spherilene",
		category: "Roto Molding",
		summary: "LLDPE roto molding grade with a balanced processability / mechanics profile for tanks and containers.",
		applications: "Tanks and containers for domestic & industrial water storage, sanitation, agriculture",
		bis: "IS 7328-2B-RBJ-CDC",
		mfi: "5.0",
		mfiCondition: "2.16 kg, 190°C",
		density: "0.934",
		properties: [
			{
				label: "MFI (2.16 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "5.0"
			},
			{
				label: "MFI (5 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "14"
			},
			{
				label: "MFI (21.6 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "120"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.934"
			},
			{
				label: "Density range (IS 2530)",
				method: "IS 2530",
				unit: "g/cm³",
				value: "0.932 – 0.936"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "17"
			},
			{
				label: "Elongation at Break",
				method: "ASTM D638",
				unit: "%",
				value: "800"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "350"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "400"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "110"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "126"
			},
			{
				label: "ESCR (F50, 10% Igepal)",
				method: "ASTM D1693B",
				unit: "hr",
				value: "100"
			}
		],
		processing: [{
			label: "Oven Temperature",
			value: "240 – 280 °C"
		}],
		flags: ["Food contact", "Roto molding"]
	},
	{
		id: "73005tu",
		name: "73005TU",
		family: "LLDPE",
		brand: "Halene L",
		technology: "Spherilene",
		category: "Roto Molding (UV)",
		summary: "UV-stabilized (~2000 ppm light stabilizer) LLDPE roto grade for outdoor tanks and containers.",
		applications: "Outdoor tanks and containers with UV stability for water, sanitation, agriculture",
		bis: "IS 7328-2B-RDO-CDC",
		mfi: "5.0",
		mfiCondition: "2.16 kg, 190°C",
		density: "0.934",
		properties: [
			{
				label: "MFI (2.16 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "5.0"
			},
			{
				label: "MFI (5 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "14"
			},
			{
				label: "MFI (21.6 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "120"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.934"
			},
			{
				label: "Density range (IS 2530)",
				method: "IS 2530",
				unit: "g/cm³",
				value: "0.932 – 0.936"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "17"
			},
			{
				label: "Elongation at Break",
				method: "ASTM D638",
				unit: "%",
				value: "800"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "350"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "400"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "110"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "126"
			},
			{
				label: "ESCR (F50, 10% Igepal)",
				method: "ASTM D1693B",
				unit: "hr",
				value: "100"
			}
		],
		processing: [{
			label: "Oven Temperature",
			value: "240 – 280 °C"
		}],
		flags: [
			"Food contact",
			"UV stabilized",
			"Roto molding"
		]
	},
	{
		id: "73204t",
		name: "73204T",
		family: "LLDPE",
		brand: "Halene L",
		technology: "Spherilene",
		category: "Roto Molding",
		summary: "Lower-density LLDPE roto grade with higher impact and ESCR for tanks and containers.",
		applications: "Tanks and containers for domestic & industrial water storage, sanitation, agriculture",
		bis: "IS 7328-2B-RBO-CDC",
		mfi: "5.0",
		mfiCondition: "2.16 kg, 190°C",
		density: "0.932",
		properties: [
			{
				label: "MFI (2.16 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "5.0"
			},
			{
				label: "MFI (5 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "14"
			},
			{
				label: "MFI (21.6 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "120"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.932"
			},
			{
				label: "Density range (IS 2530)",
				method: "IS 2530",
				unit: "g/cm³",
				value: "0.932 – 0.934"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "17"
			},
			{
				label: "Elongation at Break",
				method: "ASTM D638",
				unit: "%",
				value: "850"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "500"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "400"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "109"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "126"
			},
			{
				label: "ESCR (F50, 10% Igepal)",
				method: "ASTM D1693B",
				unit: "hr",
				value: "500"
			}
		],
		processing: [{
			label: "Oven Temperature",
			value: "240 – 280 °C"
		}],
		flags: [
			"Food contact",
			"Roto molding",
			"High ESCR"
		]
	},
	{
		id: "73204tu",
		name: "73204TU",
		family: "LLDPE",
		brand: "Halene L",
		technology: "Spherilene",
		category: "Roto Molding (UV)",
		summary: "UV-stabilized (~2000 ppm) lower-density LLDPE roto grade for outdoor tanks with high impact and ESCR.",
		applications: "Outdoor tanks and containers with UV stability for water, sanitation, agriculture",
		bis: "IS 7328-2B-RDO-CDC",
		mfi: "5.0",
		mfiCondition: "2.16 kg, 190°C",
		density: "0.932",
		properties: [
			{
				label: "MFI (2.16 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "5.0"
			},
			{
				label: "MFI (5 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "14"
			},
			{
				label: "MFI (21.6 kg)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "120"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.932"
			},
			{
				label: "Density range (IS 2530)",
				method: "IS 2530",
				unit: "g/cm³",
				value: "0.932 – 0.934"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "17"
			},
			{
				label: "Elongation at Break",
				method: "ASTM D638",
				unit: "%",
				value: "850"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "500"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "400"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "109"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "126"
			},
			{
				label: "ESCR (F50, 10% Igepal)",
				method: "ASTM D1693B",
				unit: "hr",
				value: "500"
			}
		],
		processing: [{
			label: "Oven Temperature",
			value: "240 – 280 °C"
		}],
		flags: [
			"Food contact",
			"UV stabilized",
			"High ESCR"
		]
	}
];
var ppGrades = [
	{
		id: "b202s",
		name: "B202S",
		family: "PP",
		brand: "Halene P",
		technology: "Spheripol",
		category: "Random Copolymer / Blow",
		summary: "PP random copolymer with exceptional processability, melt strength, high clarity and gloss.",
		applications: "Blow molded bottles and containers for medical and transparent products",
		bis: "IS 10951-2-BB-A",
		mfi: "1.9",
		mfiCondition: "2.16 kg, 230°C",
		density: "0.90",
		properties: [
			{
				label: "MFI (2.16 kg, 230°C)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "1.9"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.90"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "27"
			},
			{
				label: "Tensile Elongation at Yield",
				method: "ASTM D638",
				unit: "%",
				value: "11"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "900"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "90"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "130"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "68"
			}
		],
		processing: [{
			label: "Barrel Temperature",
			value: "160 – 210 °C"
		}, {
			label: "Die Temperature",
			value: "190 – 210 °C"
		}],
		flags: [
			"Food contact",
			"Random copolymer",
			"Clarity"
		]
	},
	{
		id: "m212s",
		name: "M212S",
		family: "PP",
		brand: "Halene P",
		technology: "Spheripol",
		category: "Clarified Random Copolymer",
		summary: "Clarified PP random copolymer with high flow, low cycle time and stiffness–impact balance.",
		applications: "High-clarity IM and ISBM containers, household items, injection syringes",
		bis: "IS 10951-2-MBL-C",
		mfi: "12",
		mfiCondition: "2.16 kg, 230°C",
		density: "0.90",
		properties: [
			{
				label: "MFI (2.16 kg, 230°C)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "12"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.90"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "28"
			},
			{
				label: "Tensile Elongation at Yield",
				method: "ASTM D638",
				unit: "%",
				value: "12"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "1050"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "50"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "128"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "75"
			}
		],
		processing: [{
			label: "Barrel Temperature",
			value: "160 – 250 °C"
		}, {
			label: "Mold Temperature",
			value: "30 – 60 °C"
		}],
		flags: [
			"Food contact",
			"Clarified",
			"ISBM"
		]
	},
	{
		id: "m304",
		name: "M304",
		family: "PP",
		brand: "Halene P",
		technology: "Spheripol",
		category: "Impact Copolymer",
		summary: "Heterophasic PP impact copolymer with low cycle time and excellent impact–stiffness balance.",
		applications: "Injection molded furniture, automotive components, paint pails, crates",
		bis: "IS 10951-3-MB-A",
		mfi: "3.5",
		mfiCondition: "2.16 kg, 230°C",
		density: "0.90",
		properties: [
			{
				label: "MFI (2.16 kg, 230°C)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "3.5"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.90"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "25"
			},
			{
				label: "Tensile Elongation at Yield",
				method: "ASTM D638",
				unit: "%",
				value: "7"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "1000"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: ">150"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "145"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "90"
			}
		],
		processing: [{
			label: "Barrel Temperature",
			value: "180 – 260 °C"
		}, {
			label: "Mold Temperature",
			value: "30 – 40 °C"
		}],
		flags: ["Food contact", "Impact copolymer"]
	},
	{
		id: "m307",
		name: "M307",
		family: "PP",
		brand: "Halene P",
		technology: "Spheripol",
		category: "Impact Copolymer",
		summary: "Heterophasic PP impact copolymer combining excellent processability with low cycle time.",
		applications: "General purpose injection molding",
		bis: "IS 10951-3-MB-B",
		mfi: "7",
		mfiCondition: "2.16 kg, 230°C",
		density: "0.90",
		properties: [
			{
				label: "MFI (2.16 kg, 230°C)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "7"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.90"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "23"
			},
			{
				label: "Tensile Elongation at Yield",
				method: "ASTM D638",
				unit: "%",
				value: "6"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "950"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "80"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "145"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "88"
			}
		],
		processing: [{
			label: "Barrel Temperature",
			value: "180 – 260 °C"
		}, {
			label: "Mold Temperature",
			value: "30 – 40 °C"
		}],
		flags: ["Food contact", "Impact copolymer"]
	},
	{
		id: "m310",
		name: "M310",
		family: "PP",
		brand: "Halene P",
		technology: "Spheripol",
		category: "Impact Copolymer",
		summary: "High-flow heterophasic PP ICP with thermal stability and good impact–stiffness balance.",
		applications: "Injection molded battery boxes and industrial items",
		bis: "IS 10951-3-JB-C",
		mfi: "10",
		mfiCondition: "2.16 kg, 230°C",
		density: "0.90",
		properties: [
			{
				label: "MFI (2.16 kg, 230°C)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "10"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.90"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "24"
			},
			{
				label: "Tensile Elongation at Yield",
				method: "ASTM D638",
				unit: "%",
				value: "6"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "1200"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "90"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "145"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "100"
			}
		],
		processing: [{
			label: "Barrel Temperature",
			value: "160 – 250 °C"
		}, {
			label: "Mold Temperature",
			value: "30 – 40 °C"
		}],
		flags: ["Food contact", "Battery box"]
	},
	{
		id: "m311t",
		name: "M311T",
		family: "PP",
		brand: "Halene P",
		technology: "Spheripol",
		category: "Impact Copolymer",
		summary: "High-toughness heterophasic PP ICP with high flow, gloss, and 500 J/m Izod impact.",
		applications: "Automotive components, compounds, molded luggage, industrial parts",
		bis: "IS 10951-3-MB-C",
		mfi: "10",
		mfiCondition: "2.16 kg, 230°C",
		density: "0.90",
		properties: [
			{
				label: "MFI (2.16 kg, 230°C)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "10"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.90"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "21"
			},
			{
				label: "Tensile Elongation at Yield",
				method: "ASTM D638",
				unit: "%",
				value: "7"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "900"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "500"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "142"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "85"
			}
		],
		processing: [{
			label: "Barrel Temperature",
			value: "160 – 250 °C"
		}, {
			label: "Mold Temperature",
			value: "30 – 40 °C"
		}],
		flags: ["Food contact", "High impact"]
	},
	{
		id: "m312",
		name: "M312",
		family: "PP",
		brand: "Halene P",
		technology: "Spheripol",
		category: "Impact Copolymer",
		summary: "High-flow heterophasic PP ICP with good impact–stiffness balance and gloss.",
		applications: "Automotive components, housewares, luggage, paint pails, compounds",
		bis: "IS 10951-3-MB-C",
		mfi: "12",
		mfiCondition: "2.16 kg, 230°C",
		density: "0.90",
		properties: [
			{
				label: "MFI (2.16 kg, 230°C)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "12"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.90"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "23"
			},
			{
				label: "Tensile Elongation at Yield",
				method: "ASTM D638",
				unit: "%",
				value: "5"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "950"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "120"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "145"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "100"
			}
		],
		processing: [{
			label: "Barrel Temperature",
			value: "160 – 250 °C"
		}, {
			label: "Mold Temperature",
			value: "30 – 40 °C"
		}],
		flags: ["Food contact", "Impact copolymer"]
	},
	{
		id: "m320",
		name: "M320",
		family: "PP",
		brand: "Halene P",
		technology: "Spheripol",
		category: "Nucleated Impact Copolymer",
		summary: "Nucleated heterophasic PP ICP with low cycle time and good impact–stiffness balance.",
		applications: "Injection molded products, automotive components, appliances",
		bis: "IS 10951-3-MBV-D",
		mfi: "20",
		mfiCondition: "2.16 kg, 230°C",
		density: "0.90",
		properties: [
			{
				label: "MFI (2.16 kg, 230°C)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "20"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.90"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "23"
			},
			{
				label: "Tensile Elongation at Yield",
				method: "ASTM D638",
				unit: "%",
				value: "6"
			},
			{
				label: "Flexural Modulus (1% Secant)",
				method: "ASTM D790A",
				unit: "MPa",
				value: "1150"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "100"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "145"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "105"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "165"
			}
		],
		processing: [{
			label: "Barrel Temperature",
			value: "180 – 260 °C"
		}, {
			label: "Mold Temperature",
			value: "30 – 40 °C"
		}],
		flags: ["Food contact", "Nucleated"]
	},
	{
		id: "m325",
		name: "M325",
		family: "PP",
		brand: "Halene P",
		technology: "Spheripol",
		category: "Impact Copolymer",
		summary: "High-flow heterophasic PP ICP with stiffness–impact balance and gloss.",
		applications: "Furniture, compounds, automotive, housewares, appliance parts, extrusion coating",
		bis: "IS 10951-3-ZB-D",
		mfi: "25",
		mfiCondition: "2.16 kg, 230°C",
		density: "0.90",
		properties: [
			{
				label: "MFI (2.16 kg, 230°C)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "25"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.90"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "25"
			},
			{
				label: "Tensile Elongation at Yield",
				method: "ASTM D638",
				unit: "%",
				value: "7"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "1150"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "60"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "140"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "84"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "165"
			}
		],
		processing: [{
			label: "Barrel Temperature",
			value: "180 – 210 °C"
		}, {
			label: "Mold Temperature",
			value: "30 – 40 °C"
		}],
		flags: ["Food contact", "High flow"]
	},
	{
		id: "m330",
		name: "M330",
		family: "PP",
		brand: "Halene P",
		technology: "Spheripol",
		category: "Nucleated Impact Copolymer",
		summary: "Nucleated heterophasic PP ICP, MFI 30, for fast-cycle injection molding.",
		applications: "Injection molded products, automotive parts, compounds, appliances",
		bis: "IS 10951-3-MBV-D",
		mfi: "30",
		mfiCondition: "2.16 kg, 230°C",
		density: "0.90",
		properties: [
			{
				label: "MFI (2.16 kg, 230°C)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "30"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.90"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "22"
			},
			{
				label: "Tensile Elongation at Yield",
				method: "ASTM D638",
				unit: "%",
				value: "6"
			},
			{
				label: "Flexural Modulus (1% Secant)",
				method: "ASTM D790A",
				unit: "MPa",
				value: "1100"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "100"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "145"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "100"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "165"
			}
		],
		processing: [{
			label: "Barrel Temperature",
			value: "180 – 260 °C"
		}, {
			label: "Mold Temperature",
			value: "30 – 40 °C"
		}],
		flags: [
			"Food contact",
			"Nucleated",
			"High flow"
		]
	},
	{
		id: "m340",
		name: "M340",
		family: "PP",
		brand: "Halene P",
		technology: "Spheripol",
		category: "Nucleated Impact Copolymer",
		summary: "Nucleated heterophasic PP ICP, MFI 40, for fast-cycle injection molding.",
		applications: "Injection molded products, automotive parts, compounds, appliances",
		bis: "IS 10951-3-MBV-E",
		mfi: "40",
		mfiCondition: "2.16 kg, 230°C",
		density: "0.90",
		properties: [
			{
				label: "MFI (2.16 kg, 230°C)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "40"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.90"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "22"
			},
			{
				label: "Tensile Elongation at Yield",
				method: "ASTM D638",
				unit: "%",
				value: "6"
			},
			{
				label: "Flexural Modulus (1% Secant)",
				method: "ASTM D790A",
				unit: "MPa",
				value: "1050"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "90"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "145"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "100"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "165"
			}
		],
		processing: [{
			label: "Barrel Temperature",
			value: "180 – 260 °C"
		}, {
			label: "Mold Temperature",
			value: "30 – 40 °C"
		}],
		flags: [
			"Food contact",
			"Nucleated",
			"High flow"
		]
	},
	{
		id: "m365",
		name: "M365",
		family: "PP",
		brand: "Halene P",
		technology: "Spheripol",
		category: "Nucleated Impact Copolymer",
		summary: "Very high-flow nucleated heterophasic PP ICP for thin-walled injection molding.",
		applications: "Thin-walled IM products, automotive parts, compounds, appliances",
		bis: "IS 10951-3-MBV-F",
		mfi: "65",
		mfiCondition: "2.16 kg, 230°C",
		density: "0.90",
		properties: [
			{
				label: "MFI (2.16 kg, 230°C)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "65"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.90"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "22"
			},
			{
				label: "Tensile Elongation at Yield",
				method: "ASTM D638",
				unit: "%",
				value: "6"
			},
			{
				label: "Flexural Modulus (1% Secant)",
				method: "ASTM D790A",
				unit: "MPa",
				value: "1200"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "75"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "148"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "95"
			},
			{
				label: "DSC Melting Temperature",
				method: "ASTM D3418",
				unit: "°C",
				value: "165"
			}
		],
		processing: [{
			label: "Barrel Temperature",
			value: "180 – 260 °C"
		}, {
			label: "Mold Temperature",
			value: "30 – 40 °C"
		}],
		flags: [
			"Food contact",
			"Nucleated",
			"Thin wall"
		]
	},
	{
		id: "m308s",
		name: "M308S",
		family: "PP",
		brand: "Halene P",
		technology: "Spheripol",
		category: "High Impact Copolymer",
		summary: "High-impact heterophasic PP ICP with low cycle time and excellent impact–stiffness balance.",
		applications: "Automotive components, housewares, luggage, paint pails, compounds",
		bis: "IS 10951-3-MB-B",
		mfi: "8",
		mfiCondition: "2.16 kg, 230°C",
		density: "0.90",
		properties: [
			{
				label: "MFI (2.16 kg, 230°C)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "8"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.90"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "20"
			},
			{
				label: "Tensile Elongation at Yield",
				method: "ASTM D638",
				unit: "%",
				value: "5"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "1000"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "500"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "145"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "90"
			}
		],
		processing: [{
			label: "Barrel Temperature",
			value: "160 – 250 °C"
		}, {
			label: "Mold Temperature",
			value: "30 – 40 °C"
		}],
		flags: ["Food contact", "High impact"]
	},
	{
		id: "f103",
		name: "F103",
		family: "PP",
		brand: "Halene P",
		technology: "Spheripol",
		category: "Homopolymer / BOPP Film",
		summary: "PP homopolymer designed for stable stenter extrusion with low water carryover and good thickness control.",
		applications: "BOPP films for food packaging, lamination and metallizable applications",
		bis: "IS 10951-1-FB-A",
		mfi: "3",
		mfiCondition: "2.16 kg, 230°C",
		density: "0.90",
		properties: [
			{
				label: "MFI (2.16 kg, 230°C)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "3"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.90"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "34"
			},
			{
				label: "Tensile Elongation at Yield",
				method: "ASTM D638",
				unit: "%",
				value: "10"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "1450"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "40"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "152"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "95"
			}
		],
		processing: [{
			label: "Barrel Temperature",
			value: "230 – 280 °C"
		}, {
			label: "Water Bath Temperature",
			value: "10 – 15 °C"
		}],
		flags: [
			"Food contact",
			"BOPP",
			"Homopolymer"
		]
	},
	{
		id: "f110",
		name: "F110",
		family: "PP",
		brand: "Halene P",
		technology: "Spheripol",
		category: "Homopolymer / TQ Film",
		summary: "PP homopolymer with slip and antiblock for tubular quenched film; excellent clarity and gloss.",
		applications: "TQ film for packaging foodstuffs and garments",
		bis: "IS 10951-1-NBH-C",
		mfi: "11",
		mfiCondition: "2.16 kg, 230°C",
		density: "0.90",
		properties: [
			{
				label: "MFI (2.16 kg, 230°C)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "11"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.90"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "34"
			},
			{
				label: "Tensile Elongation at Yield",
				method: "ASTM D638",
				unit: "%",
				value: "9"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "1400"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "30"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "154"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "99"
			}
		],
		processing: [{
			label: "Barrel Temperature",
			value: "180 – 230 °C"
		}, {
			label: "Die Temperature",
			value: "190 – 210 °C"
		}],
		flags: [
			"Food contact",
			"TQ film",
			"Slip + antiblock"
		]
	},
	{
		id: "f135",
		name: "F135",
		family: "PP",
		brand: "Halene P",
		technology: "Spheripol",
		category: "Homopolymer / Coating & Spunbond",
		summary: "Controlled-rheology PP homopolymer with high MFI, narrow MWD and gas-fading resistance.",
		applications: "Extrusion coating on woven fabrics; spunbond nonwoven and hygiene products",
		bis: "IS 10951-1-HBV-E",
		mfi: "35",
		mfiCondition: "2.16 kg, 230°C",
		density: "0.90",
		properties: [
			{
				label: "MFI (2.16 kg, 230°C)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "35"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.90"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "35"
			},
			{
				label: "Tensile Elongation at Yield",
				method: "ASTM D638",
				unit: "%",
				value: "8"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "1350"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "45"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "150"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "105"
			}
		],
		processing: [{
			label: "Barrel Temperature",
			value: "180 – 220 °C"
		}, {
			label: "Die Temperature",
			value: "215 – 220 °C"
		}],
		flags: [
			"Food contact",
			"Spunbond",
			"Controlled rheology"
		]
	},
	{
		id: "m103",
		name: "M103",
		family: "PP",
		brand: "Halene P",
		technology: "Spheripol",
		category: "Homopolymer / IM & Extrusion",
		summary: "PP homopolymer combining easy processability with high strength.",
		applications: "General purpose extrusion and injection molding",
		bis: "IS 10951-1-MB-A",
		mfi: "3",
		mfiCondition: "2.16 kg, 230°C",
		density: "0.90",
		properties: [
			{
				label: "MFI (2.16 kg, 230°C)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "3"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.90"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "32"
			},
			{
				label: "Tensile Elongation at Yield",
				method: "ASTM D638",
				unit: "%",
				value: "7"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "1300"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "35"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "153"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "93"
			}
		],
		processing: [{
			label: "Barrel Temperature",
			value: "190 – 250 °C"
		}, {
			label: "Mold Temperature",
			value: "40 – 50 °C"
		}],
		flags: ["Food contact", "Homopolymer"]
	},
	{
		id: "m106",
		name: "M106",
		family: "PP",
		brand: "Halene P",
		technology: "Spheripol",
		category: "Homopolymer / IM & Extrusion",
		summary: "PP homopolymer combining easy processability with high strength.",
		applications: "General purpose extrusion and injection molding",
		bis: "IS 10951-1-MB-A",
		mfi: "6",
		mfiCondition: "2.16 kg, 230°C",
		density: "0.90",
		properties: [
			{
				label: "MFI (2.16 kg, 230°C)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "6"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.90"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "32"
			},
			{
				label: "Tensile Elongation at Yield",
				method: "ASTM D638",
				unit: "%",
				value: "7"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "1300"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "35"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "153"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "93"
			}
		],
		processing: [{
			label: "Barrel Temperature",
			value: "180 – 260 °C"
		}, {
			label: "Mold Temperature",
			value: "30 – 40 °C"
		}],
		flags: ["Food contact", "Homopolymer"]
	},
	{
		id: "m108",
		name: "M108",
		family: "PP",
		brand: "Halene P",
		technology: "Spheripol",
		category: "Homopolymer / IM & Extrusion",
		summary: "PP homopolymer combining easy processability with high strength.",
		applications: "General purpose extrusion and injection molding",
		bis: "IS 10951-1-MB-B",
		mfi: "8",
		mfiCondition: "2.16 kg, 230°C",
		density: "0.90",
		properties: [
			{
				label: "MFI (2.16 kg, 230°C)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "8"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.90"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "30"
			},
			{
				label: "Tensile Elongation at Yield",
				method: "ASTM D638",
				unit: "%",
				value: "7"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "1300"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "35"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "152"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "94"
			}
		],
		processing: [{
			label: "Barrel Temperature",
			value: "180 – 260 °C"
		}, {
			label: "Mold Temperature",
			value: "30 – 40 °C"
		}],
		flags: ["Food contact", "Homopolymer"]
	},
	{
		id: "m110",
		name: "M110",
		family: "PP",
		brand: "Halene P",
		technology: "Spheripol",
		category: "Homopolymer / Injection",
		summary: "PP homopolymer with low cycle time, high gloss and excellent color for furniture and housewares.",
		applications: "Injection molded furniture and household items",
		bis: "IS 10951-1-MB-C",
		mfi: "11",
		mfiCondition: "2.16 kg, 230°C",
		density: "0.90",
		properties: [
			{
				label: "MFI (2.16 kg, 230°C)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "11"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.90"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "34"
			},
			{
				label: "Tensile Elongation at Yield",
				method: "ASTM D638",
				unit: "%",
				value: "9"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "1500"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "30"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "154"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "99"
			}
		],
		processing: [{
			label: "Barrel Temperature",
			value: "180 – 280 °C"
		}, {
			label: "Mold Temperature",
			value: "30 – 40 °C"
		}],
		flags: ["Food contact", "High gloss"]
	},
	{
		id: "r103",
		name: "R103",
		family: "PP",
		brand: "Halene P",
		technology: "Spheripol",
		category: "Homopolymer / Raffia",
		summary: "PP homopolymer with low water carryover, excellent strength and color for raffia.",
		applications: "Stretched tape raffia for woven sacks, FIBC, ropes and yarns",
		bis: "IS 10951-1-TB-A",
		mfi: "3",
		mfiCondition: "2.16 kg, 230°C",
		density: "0.90",
		properties: [
			{
				label: "MFI (2.16 kg, 230°C)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "3"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.90"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "34"
			},
			{
				label: "Tensile Elongation at Yield",
				method: "ASTM D638",
				unit: "%",
				value: "9"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "1500"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "40"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "153"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "93"
			}
		],
		processing: [
			{
				label: "Barrel Temperature",
				value: "220 – 280 °C"
			},
			{
				label: "Die Temperature",
				value: "260 – 280 °C"
			},
			{
				label: "Quench Temperature",
				value: "30 – 40 °C"
			},
			{
				label: "Stretching Temperature",
				value: "~ 160 °C (Oven)"
			}
		],
		flags: ["Food contact", "Raffia"]
	},
	{
		id: "t103",
		name: "T103",
		family: "PP",
		brand: "Halene P",
		technology: "Spheripol",
		category: "Homopolymer / Thermoforming",
		summary: "PP homopolymer with exceptional stiffness, clarity and gloss for thermoforming.",
		applications: "Thermoforming of cups, containers and miscellaneous disposable items",
		bis: "IS 10951-1-DBL-A",
		mfi: "4",
		mfiCondition: "2.16 kg, 230°C",
		density: "0.90",
		properties: [
			{
				label: "MFI (2.16 kg, 230°C)",
				method: "ASTM D1238",
				unit: "g/10 min",
				value: "4"
			},
			{
				label: "Density (23°C)",
				method: "ASTM D1505",
				unit: "g/cm³",
				value: "0.90"
			},
			{
				label: "Tensile Strength at Yield",
				method: "ASTM D638",
				unit: "MPa",
				value: "37"
			},
			{
				label: "Tensile Elongation at Yield",
				method: "ASTM D638",
				unit: "%",
				value: "8"
			},
			{
				label: "Flexural Modulus",
				method: "ASTM D790A",
				unit: "MPa",
				value: "1700"
			},
			{
				label: "Notched Izod (23°C)",
				method: "ASTM D256A",
				unit: "J/m",
				value: "60"
			},
			{
				label: "Vicat Softening Point (10 N)",
				method: "ASTM D1525",
				unit: "°C",
				value: "154"
			},
			{
				label: "HDT (0.455 MPa)",
				method: "ASTM D648",
				unit: "°C",
				value: "95"
			}
		],
		processing: [{
			label: "Barrel Temperature",
			value: "190 – 230 °C"
		}, {
			label: "Die Temperature",
			value: "220 – 250 °C"
		}],
		flags: [
			"Food contact",
			"Thermoforming",
			"High stiffness"
		]
	}
];
var grades = [
	...hdpeGrades,
	...lldpeGrades,
	...ppGrades
];
var familyMeta = {
	HDPE: {
		label: "HDPE",
		full: "High-Density Polyethylene",
		brand: "Halene H",
		count: hdpeGrades.length,
		tone: "hdpe"
	},
	LLDPE: {
		label: "LLDPE",
		full: "Linear Low-Density Polyethylene",
		brand: "Halene L",
		count: lldpeGrades.length,
		tone: "lldpe"
	},
	PP: {
		label: "PP",
		full: "Polypropylene",
		brand: "Halene P",
		count: ppGrades.length,
		tone: "pp"
	}
};
Array.from(new Set(grades.map((g) => g.category))).sort();
var FAMILY_FILTERS = [
	"ALL",
	"HDPE",
	"LLDPE",
	"PP"
];
function Catalog() {
	const [family, setFamily] = (0, import_react.useState)("ALL");
	const [category, setCategory] = (0, import_react.useState)("ALL");
	const [query, setQuery] = (0, import_react.useState)("");
	const [openId, setOpenId] = (0, import_react.useState)(null);
	const [compareIds, setCompareIds] = (0, import_react.useState)([]);
	const [compareOpen, setCompareOpen] = (0, import_react.useState)(false);
	const categoryOptions = (0, import_react.useMemo)(() => {
		const pool = family === "ALL" ? grades : grades.filter((g) => g.family === family);
		return Array.from(new Set(pool.map((g) => g.category))).sort();
	}, [family]);
	const visible = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		return grades.filter((g) => {
			if (family !== "ALL" && g.family !== family) return false;
			if (category !== "ALL" && g.category !== category) return false;
			if (!q) return true;
			return [
				g.name,
				g.brand,
				g.family,
				g.category,
				g.summary,
				g.applications,
				g.technology,
				g.bis ?? "",
				g.flags.join(" ")
			].join(" ").toLowerCase().includes(q);
		});
	}, [
		family,
		category,
		query
	]);
	const openGrade = grades.find((g) => g.id === openId) ?? null;
	const compareGrades = compareIds.map((id) => grades.find((g) => g.id === id)).filter((g) => Boolean(g));
	function toggleCompare(id) {
		setCompareIds((current) => {
			if (current.includes(id)) return current.filter((x) => x !== id);
			if (current.length >= 2) return [current[1], id];
			return [...current, id];
		});
	}
	function setFamilyFilter(next) {
		setFamily(next);
		setCategory("ALL");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "no-print sticky top-0 z-40 border-b border-border bg-bg/95 backdrop-blur-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:gap-6 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-wide text-fg-muted",
							children: "Haldia Petrochemicals"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-lg font-medium leading-tight tracking-tight",
							children: "Halene Grade Book"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "relative min-w-0 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: "Search grades"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-fg-subtle" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: query,
								onChange: (e) => setQuery(e.target.value),
								placeholder: "Search grade, application, BIS…",
								className: "pl-10"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-7xl px-4 pb-28 pt-8 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "max-w-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium uppercase tracking-wide text-fg-muted",
								children: "Technical data · two-up sheets"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-3xl font-medium tracking-tight text-fg sm:text-4xl",
								children: "HDPE, LLDPE and PP grades"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-sm leading-relaxed text-fg-muted sm:text-base",
								children: [
									"Typical properties, processing windows and BIS codes for every Halene H, Halene L and Halene P sheet in the ARDC book — ",
									grades.length,
									" grades, shown two columns across."
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3",
						children: [
							"HDPE",
							"LLDPE",
							"PP"
						].map((key) => {
							const meta = familyMeta[key];
							const tone = familyStyle[key];
							const active = family === key;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setFamilyFilter(active ? "ALL" : key),
								className: cn("rounded-md border px-4 py-4 text-left transition-colors duration-150", active ? tone.badge : "border-border bg-bg-elevated hover:bg-bg"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: cn("text-xs font-medium uppercase tracking-wide", active ? "text-accent-fg/80" : "text-fg-muted"),
										children: meta.brand
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-display text-xl font-medium",
										children: meta.full
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: cn("mt-2 text-sm", active ? "text-accent-fg/80" : "text-fg-muted"),
										children: [meta.count, " grades"]
									})
								]
							}, key);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "no-print mt-8 flex flex-col gap-3 sm:flex-row sm:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: FAMILY_FILTERS.map((key) => {
								const active = family === key;
								const label = key === "ALL" ? "All" : familyMeta[key].label;
								const count = key === "ALL" ? grades.length : familyMeta[key].count;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "button",
									variant: active ? "ink" : "outline",
									onClick: () => setFamilyFilter(key),
									"aria-pressed": active,
									children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-xs tabular-nums opacity-70",
										children: count
									})]
								}, key);
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "sm:ml-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: "Filter by application"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: category,
								onChange: (e) => setCategory(e.target.value),
								className: "h-11 min-w-56 rounded-sm border border-border bg-bg-elevated px-3 text-sm text-fg outline-none focus-visible:ring-2 focus-visible:ring-ring",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "ALL",
									children: "All applications"
								}), categoryOptions.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: c,
									children: c
								}, c))]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-sm text-fg-muted",
						children: [
							visible.length,
							" sheet",
							visible.length === 1 ? "" : "s",
							family !== "ALL" ? ` · ${familyMeta[family].brand}` : "",
							category !== "ALL" ? ` · ${category}` : ""
						]
					}),
					visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 rounded-md border border-dashed border-border-strong bg-bg-elevated px-6 py-16 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl text-fg",
								children: "No grades match"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-fg-muted",
								children: "Clear search or pick another family."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "outline",
								className: "mt-6",
								onClick: () => {
									setQuery("");
									setFamilyFilter("ALL");
								},
								children: "Reset filters"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2",
						children: visible.map((grade) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GradeCard, {
							grade,
							selected: compareIds.includes(grade.id),
							onOpen: () => setOpenId(grade.id),
							onCompare: () => toggleCompare(grade.id)
						}, grade.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "no-print border-t border-border px-4 py-8 text-center text-xs leading-relaxed text-fg-subtle sm:px-6",
				children: "Typical values of representative samples, compiled from Haldia Petrochemicals ARDC technical data sheets. Not a specification. Halene H, Halene L and Halene P are registered trademarks of Haldia Petrochemicals Limited."
			}),
			compareGrades.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "no-print fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg-ink text-accent-fg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-3 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitCompareArrows, { className: "size-4 shrink-0" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "min-w-0 flex-1 text-sm",
							children: [compareGrades.map((g) => g.name).join("  ·  "), compareGrades.length === 1 ? " — pick a second grade" : ""]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							className: "border-accent-fg/30 bg-transparent text-accent-fg hover:bg-accent-fg/10",
							disabled: compareGrades.length !== 2,
							onClick: () => setCompareOpen(true),
							children: "Compare sheets"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							size: "icon",
							className: "text-accent-fg hover:bg-accent-fg/10",
							onClick: () => setCompareIds([]),
							"aria-label": "Clear comparison",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
						})
					]
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: Boolean(openGrade),
				onOpenChange: (o) => !o && setOpenId(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
					className: "p-0",
					children: openGrade ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GradeDetail, { grade: openGrade }) : null
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: compareOpen,
				onOpenChange: setCompareOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
					className: "p-0",
					children: compareGrades.length === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompareSheet, {
						left: compareGrades[0],
						right: compareGrades[1]
					}) : null
				})
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Catalog, {});
}
//#endregion
export { Home as component };
