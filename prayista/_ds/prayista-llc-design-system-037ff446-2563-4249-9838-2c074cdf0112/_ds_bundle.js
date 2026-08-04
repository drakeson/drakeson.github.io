/* @ds-bundle: {"format":4,"namespace":"PrayistaDesignSystem_037ff4","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"BottomNav","sourcePath":"components/navigation/BottomNav.jsx"},{"name":"Header","sourcePath":"components/navigation/Header.jsx"},{"name":"GlassCard","sourcePath":"components/surfaces/GlassCard.jsx"},{"name":"Modal","sourcePath":"components/surfaces/Modal.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"975543ed5a95","components/core/Badge.jsx":"69f0654cdccb","components/core/Button.jsx":"3030a8a2a359","components/core/Chip.jsx":"c9f12c839857","components/core/Input.jsx":"5a0790287b48","components/navigation/BottomNav.jsx":"c07bd0f9c0e1","components/navigation/Header.jsx":"4df2393d3937","components/surfaces/GlassCard.jsx":"c15951435ed5","components/surfaces/Modal.jsx":"8bd476c5deb6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PrayistaDesignSystem_037ff4 = window.PrayistaDesignSystem_037ff4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function Avatar({
  initials,
  size = 44,
  src
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'var(--color-primary-soft)',
      color: 'var(--color-primary-strong)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: size * 0.38,
      overflow: 'hidden',
      border: '2px solid var(--color-surface)',
      boxShadow: 'var(--shadow-1)'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const tones = {
  success: ['--color-success-soft', '--color-success'],
  warning: ['--color-warning-soft', '--color-warning'],
  error: ['--color-error-soft', '--color-error'],
  info: ['--color-info-soft', '--color-info']
};
function Badge({
  tone = 'info',
  children
}) {
  const [bg, fg] = tones[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.03em',
      textTransform: 'uppercase',
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      background: `var(${bg})`,
      color: `var(${fg})`
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const base = {
  fontFamily: 'var(--font-heading)',
  fontWeight: 600,
  fontSize: 15,
  border: 'none',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  borderRadius: 'var(--radius-pill)',
  transition: 'transform var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)'
};
const sizes = {
  sm: {
    padding: '8px 16px',
    fontSize: 13
  },
  md: {
    padding: '12px 22px',
    fontSize: 15
  },
  lg: {
    padding: '16px 28px',
    fontSize: 16
  }
};
const variants = {
  primary: {
    background: 'var(--color-primary)',
    color: 'var(--text-on-primary)',
    boxShadow: 'var(--shadow-2)'
  },
  secondary: {
    background: 'var(--glass-fill)',
    color: 'var(--text-primary)',
    border: '1px solid var(--glass-border)',
    backdropFilter: 'blur(var(--blur-glass))'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--color-primary)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled,
  children,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    disabled: disabled,
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      opacity: disabled ? 0.45 : 1,
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.96)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function Chip({
  children,
  active,
  onClick,
  tone = 'neutral'
}) {
  const tones = {
    neutral: {
      bg: active ? 'var(--color-primary)' : 'var(--glass-fill)',
      fg: active ? 'var(--text-on-primary)' : 'var(--text-primary)',
      bd: active ? 'transparent' : 'var(--glass-border)'
    }
  };
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      padding: '8px 16px',
      borderRadius: 'var(--radius-pill)',
      border: `1px solid ${t.bd}`,
      background: t.bg,
      color: t.fg,
      cursor: 'pointer',
      backdropFilter: active ? 'none' : 'blur(var(--blur-glass))'
    }
  }, children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      padding: '14px 16px',
      borderRadius: 'var(--radius-md)',
      border: error ? '1px solid var(--color-error)' : '1px solid var(--divider-strong)',
      background: 'var(--color-surface)',
      color: 'var(--text-primary)',
      outline: 'none'
    }
  }), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--color-error)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomNav.jsx
try { (() => {
function BottomNav({
  items,
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: '14px 12px 22px',
      borderRadius: 'var(--radius-nav) var(--radius-nav) 0 0',
      background: 'var(--glass-fill-strong)',
      backdropFilter: 'blur(var(--blur-glass-strong))',
      borderTop: '1px solid var(--glass-border)',
      boxShadow: 'var(--shadow-4)'
    }
  }, items.map((it, i) => {
    const isActive = i === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.label,
      onClick: () => onChange && onChange(i),
      style: {
        background: 'none',
        border: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        cursor: 'pointer',
        color: isActive ? 'var(--color-primary)' : 'var(--text-tertiary)',
        transform: isActive ? 'translateY(-6px)' : 'none',
        transition: 'all var(--duration-base) var(--ease-spring)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 24,
        height: 24,
        borderRadius: '50%',
        background: isActive ? 'var(--color-primary-soft)' : 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, it.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 11,
        fontWeight: 600
      }
    }, it.label));
  }));
}
Object.assign(__ds_scope, { BottomNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Header.jsx
try { (() => {
function Header({
  title,
  onBack,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 20px',
      background: 'var(--glass-fill)',
      backdropFilter: 'blur(var(--blur-glass))',
      borderBottom: '1px solid var(--divider)',
      fontFamily: 'var(--font-heading)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, onBack && /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: 'none',
      border: 'none',
      fontSize: 20,
      color: 'var(--color-primary)',
      cursor: 'pointer'
    }
  }, "\u2039"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: 'var(--text-primary)'
    }
  }, title)), /*#__PURE__*/React.createElement("div", null, right));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Header.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/GlassCard.jsx
try { (() => {
function GlassCard({
  children,
  padding = 20,
  style,
  elevation = 2
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--glass-fill)',
      backdropFilter: 'blur(var(--blur-glass))',
      WebkitBackdropFilter: 'blur(var(--blur-glass))',
      border: '1px solid var(--glass-border)',
      boxShadow: `var(--shadow-${elevation}),var(--shadow-glass-inset)`,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { GlassCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/GlassCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Modal.jsx
try { (() => {
function Modal({
  open,
  onClose,
  title,
  children
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(20,9,13,0.45)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      zIndex: 50
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: 420,
      padding: 24,
      borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0',
      background: 'var(--glass-fill-strong)',
      backdropFilter: 'blur(var(--blur-glass-strong))',
      border: '1px solid var(--glass-border)',
      boxShadow: 'var(--shadow-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 4,
      borderRadius: 2,
      background: 'var(--divider-strong)',
      margin: '0 auto 16px'
    }
  }), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 18,
      marginBottom: 12,
      color: 'var(--text-primary)'
    }
  }, title), children));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Modal.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.BottomNav = __ds_scope.BottomNav;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.GlassCard = __ds_scope.GlassCard;

__ds_ns.Modal = __ds_scope.Modal;

})();
