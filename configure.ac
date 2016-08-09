#
# Process this file with autogen to produce a configure script.
#

AC_PREREQ(2.52)

m4_define([required_apertium_version], [3.3.0])
m4_define([required_lttoolbox_version], [3.3.0])

AC_INIT([Apertium English], [0.1.0], [francis.tyers@gmail.com], [apertium-eng], [http://wiki.apertium.org/wiki/Apertium-eng])
AM_INIT_AUTOMAKE

AC_PROG_LN_S
AC_PROG_AWK

PKG_CHECK_MODULES(APERTIUM,   apertium >= required_apertium_version)
PKG_CHECK_MODULES(LTTOOLBOX, lttoolbox >= required_lttoolbox_version)

# AC_PATH_PROG([LTPRINT], [lt-print], [false], [$PATH$PATH_SEPARATOR$with_lt_print/bin])
# AS_IF([test x$LTPRINT = xfalse], [AC_MSG_ERROR([You don't have lt-print installed])])

AC_PATH_PROG([CGCOMP], [cg-comp], [false], [$PATH$PATH_SEPARATOR$with_cg_comp/bin])
AS_IF([test x$CGCOMP = xfalse], [AC_MSG_ERROR([You don't have cg-comp installed])])

AC_PATH_PROG([CGPROC], [cg-proc], [false], [$PATH$PATH_SEPARATOR$with_cg_proc/bin])
AS_IF([test x$CGPROC = xfalse], [AC_MSG_ERROR([You don't have cg-proc installed])])

# AC_PATH_PROG([PKGCONFIG], [pkg-config], [false], [$PATH$PATH_SEPARATOR$with_pkg_config/bin])
# AS_IF([test x$PKGCONFIG = xfalse], [AC_MSG_ERROR([You don't have pkg-config installed])])

AP_MKINCLUDE

AC_OUTPUT([Makefile apertium-eng.pc])
