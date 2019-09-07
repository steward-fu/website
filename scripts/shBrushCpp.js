;(function() {
 typeof(require) != 'undefined' ? 
  SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

function Brush() {
var my_constant =
'NULL KEY_ALL_ACCESS OBJ_CASE_INSENSITIVE KeyValuePartialInformation METHOD_IN_DIRECT METHOD_OUT_DIRECT ' +
'STATUS_BUFFER_OVERFLOW STATUS_BUFFER_TOO_SMALL NonPagedPool O_RDONLY '+
'STATUS_SUCCESS IRP_MJ_PNP IRP_MJ_CREATE IRP_MJ_CLOSE IRP_MJ_READ '    +
'IRP_MJ_WRITE FILE_DEVICE_UNKNOWN FALSE TRUE DO_DEVICE_INITIALIZING '  +
'DO_BUFFERED_IO DO_DIRECT_IO REG_NONE REG_DWORD GMEM_MOVEABLE '        +
'RTL_QUERY_REGISTRY_DIRECT RTL_REGISTRY_ABSOLUTE __in __out IN OUT '   +
'PASSIVE_LEVEL WDF_NO_HANDLE WDF_NO_OBJECT_ATTRIBUTES FORCEINLINE '    +
'TARGETNAME TARGETPATH TARGETTYPE KMDF_VERSION_MAJOR INCLUDES '        +
'SOURCES DRIVER NTMAKEENV INCLUDE Version DestinationDirs O_WRONLY '   +
'Manufacturer SourceDisksFiles SourceDisksNames DeviceList O_RDWR '    +
'DriverInstall .NT.Services DriverCopyFiles FILE_ATTRIBUTE_NORMAL '    +
'DriverService .NT.HW .NT DriverHwAddReg DriverAddReg .HW Strings '    +
'STATUS_UNSUCCESSFUL IRP_MN_START_DEVICE IRP_MN_REMOVE_DEVICE '        +
'IRP_MJ_MAXIMUM_FUNCTION eax ebx ecx edx IO_NO_INCREMENT ECX EDX EAX bl ' +
'IRP_MJ_CREATE_NAMED_PIPE EBX ECHO ERROR GENERIC_ALL GENERIC_READ '    +
'GENERIC_WRITE INVALID_HANDLE_VALUE OPEN_EXISTING MINORBITS MINORMASK '+
'WDF_NO_EVENT_CALLBACK WdfDriverInitNonPnpDriver CREATE_ALWAYS th0 '   +
'SDDL_DEVOBJ_SYS_ALL_ADM_RWX_WORLD_RW_RES_R WdfDeviceIoBuffered tr0 '  +
'TARGETLIBS DDK_LIB_PATH STATUS_DEVICE_CONFIGURATION_ERROR a b tmod '  +
'MODULE_AUTHOR MODULE_DESCRIPTION MODULE_LICENSE module_init ea tf0 '  +
'module_exit __mod_kernel_version __mod_license __mod_author modinfo ' +
'__mod_description __this_module THIS_MODULE __module_license owner '  +
'__module_description __module_author __module_kernel_version tl0 '    +
'dptr p0 p1 p2 p3 UMTYPE UMBASE USE_MSVCRT IRP_MJ_DEVICE_CONTROL KernelMode THREAD_ALL_ACCESS Executive '     +
'SDL_INIT_VIDEO SDL_HWSURFACE SDL_KEYDOWN r0 r1 r2 r3 r4 r5 r6 r7 r8 ' +
'r10 r11 r12 METHOD_BUFFERED FILE_ANY_ACCESS FILE_SHARE_READ METHOD_NEITHER '         +
'STATUS_PENDING INFINITE STATUS_CANCELLED FILE_FLAG_OVERLAPPED MAXIMUM_ALLOWED FILE_SHARE_WRITE DISPATCH_LEVEL ';

var my_keyword =
'ptr PTR proto PROTO struct STRUCT UNION union ends ENDS 386p 486p b program procedure Nil shl then ' +
'586p 686p model flat stdcall option casemap none includelib equ text '+
'dup MACRO REQ IFDIFI ENDIF ENDM mov inc dec add code data proc ascii '+
'endp local invoke call addr offset ADDR OFFSET push pop or and asciz '+
'endif ret not xor movzx elseif end include uses externdef syscall '+
'textequ IFNB for FOR IF OPATTR AND ELSEIF EQ ELSE IFIDNI TEXTEQU irp '+
'break case catch class const __finally __exception __try __init ifnb '+
'const_cast continue private public protected __declspec __exit endr ' +
'default delete deprecated dllexport dllimport do dynamic_cast align ' +
'else enum explicit extern if for friend goto inline assume section '  +
'mutable naked namespace new noinline noreturn nothrow near es ds ' +
'register reinterpret_cast return selectany cseg segment para far cs ' +
'sizeof static static_cast struct switch template this global ldr str '+
'thread throw true false try typedef typeid typename union adr rept '  +
'using uuid virtual void volatile whcar_t while macro req vararg fill '+
'rodata endm zero equiv exitm bit org jmp ajmp ljmp sjmp clr setb jnb '+
'jb cjne jc nop mod movc anl orl xrl jz jnz PROGRAM rlc thumb_func function var begin interface implementation unit '   +
'sub cmp thumb cpu syntax unified cortex-m3 bne Push lea edi esi endw __cdecl WINAPI ';

var my_type =
'NTSTATUS OBJECT_ATTRIBUTES UNICODE_STRING dd dw unsigned skip IO_CSQ KSPIN_LOCK '       +
'KEY_VALUE_PARTIAL_INFORMATION PKEY_VALUE_PARTIAL_INFORMATION '        +
'DEVICE_OBJECT DRIVER_OBJECT PDEVICE_OBJECT PDRIVER_OBJECT '           +
'UNICODE_STRING PUNICODE_STRING RTL_QUERY_REGISTRY_TABLE '             +
'WDF_DEVICE WDF_DRIVER_CONFIG PWDF_DEVICE WDFDEVICE PWDFDEVICE '       +
'PWDF_DRIVER_CONFIG PFN_WDF_DRIVER_DEVICE_ADD '                        +
'FN_WDF_DRIVER_DEVICE_ADD WDFDRIVER PWDFDRIVER WDFDEVICE_INIT '        +
'PWDFDEVICE_INIT LIST_ENTRY DRIVER_EXTENSION KDEVICE_QUEUE_ENTRY '     +
'PLIST_ENTRY PDRIVER_EXTENSION PKDEVICE_QUEUE_ENTRY '                  +
'PRKDEVICE_QUEUE_ENTRY WAIT_CONTEXT_BLOCK PWAIT_CONTEXT_BLOCK '        +
'KDEVICE_QUEUE PKDEVICE_QUEUE PRKDEVICE_QUEUE SWORD KDPC PKDPC '       +
'DISPATCHER_HEADER KEVENT PKEVENT PRKEVENT SDWORD '                    +
'IO_STATUS_BLOCK PIO_STATUS_BLOCK LARGE_INTEGER PLARGE_INTEGER '       +
'FILE_OBJECT PFILE_OBJECT KAPC PKAPC _IRP PHYSICAL_ADDRESS QWORD '     +
'PPHYSICAL_ADDRESS CM_PARTIAL_RESOURCE_DESCRIPTOR PIRP '               +
'PCM_PARTIAL_RESOURCE_DESCRIPTOR CM_PARTIAL_RESOURCE_LIST '            +
'PCM_PARTIAL_RESOURCE_LIST CM_FULL_RESOURCE_DESCRIPTOR '               +
'PCM_FULL_RESOURCE_DESCRIPTOR CM_RESOURCE_LIST PCM_RESOURCE_LIST '     +
'IO_STACK_LOCATION PIO_STACK_LOCATION VARARG word WORD byte _TCHAR '   +
'ATOM BOOL BOOLEAN BYTE CHAR COLORREF DWORD DWORDLONG quad '           +
'DWORD_PTRDWORD32 DWORD64 FLOAT HACCEL HALF_PTR HANDLE HBITMAP '       +
'HBRUSH HCOLORSPACE HCONV HCONVLIST HCURSOR HDC HDDEDATA HDESK HDROP ' +
'HDWP HENHMETAFILE HFILE HFONT HGDIOBJ HGLOBAL HHOOK HICON HINSTANCE ' +
'HKEY HKL HLOCAL HMENU HMETAFILE HMODULE HMONITOR HPALETTE HPEN '      +
'HRESULT HRGN HRSRC HSZ HWINSTA HWND INT INT_PTR INT32 INT64 LANGID '  +
'LCID LCTYPE LGRPID LONG LONGLONG LONG_PTR LONG32 LONG64 LPARAM '      +
'LPBOOL LPBYTE LPCOLORREF LPCSTR LPCTSTR LPCVOID LPCWSTR LPDWORD '     +
'LPHANDLE LPINT LPLONG LPSTR LPTSTR LPVOID LPWORD LPWSTR LRESULT '     +
'PBOOL PBOOLEAN PBYTE PCHAR PCSTR PCTSTR PCWSTR PDWORDLONG db DB'      +
'PDWORD_PTR PDWORD32 PDWORD64 PFLOAT PHALF_PTR PHANDLE PHKEY PINT '    +
'PINT_PTR PINT32 PINT64 PLCID PLONG PLONGLONG PLONG_PTR PLONG32 '      +
'PLONG64 POINTER_32 POINTER_64 PSHORT PSIZE_T PSSIZE_T PSTR PTBYTE '   +
'PTCHAR PTSTR PUCHAR PUHALF_PTR PUINT PUINT_PTR PUINT32 PUINT64 '      +
'PULONG PULONGLONG PULONG_PTR PULONG32 PULONG64 PUSHORT PVOID '        +
'PWCHAR PWORD PWSTR SC_HANDLE SC_LOCK SERVICE_STATUS_HANDLE SHORT '    +
'SIZE_T SSIZE_T TBYTE TCHAR UCHAR UHALF_PTR UINT UINT_PTR UINT32 '     +
'UINT64 ULONG ULONGLONG ULONG_PTR ULONG32 ULONG64 USHORT USN VOID '    +
'WCHAR WORD WPARAM WPARAM WPARAM char bool short int __int32 '         +
'__int64 __int8 __int16 long float double __wchar_t clock_t '          +
'_complex _dev_t _diskfree_t div_t ldiv_t _exception '                 +
'_EXCEPTION_POINTERS FILE _finddata_t _finddatai64_t _wfinddata_t '    +
'_wfinddatai64_t __finddata64_t __wfinddata64_t _FPIEEE_RECORD '       +
'fpos_t _HEAPINFO _HFILE lconv intptr_t jmp_buf mbstate_t _off_t '     +
'_onexit_t _PNH ptrdiff_t _purecall_handler sig_atomic_t size_t '      +
'_stat __stat64 _stati64 terminate_function time_t __time64_t '        +
'_timeb __timeb64 tm uintptr_t _utimbuf va_list wchar_t wctrans_t '    +
'wctype_t wint_t signed TCHAR file_operations cdev kobject list_head NT_OPEN_FILE ACCESS_MASK POBJECT_ATTRIBUTES ' +
'SDL_Surface SDL_Event OVERLAPPED KTIMER ';

var my_function =
'RtlUnicodeStringPrintf RtlInitUnicodeString printk _T init_module WriteLn StrCopy FillChar Format KeDelayExecutionThread PsTerminateSystemThread IoGetCurrentProcess '   +
'InitializeObjectAttributes ZwOpenKey ZwQueryValueKey ZwClose open ObReferenceObjectByHandle KeWaitForSingleObject ObDereferenceObject '   +
'ExAllocatePoolWithTag RtlCopyMemory ExFreePool DbgPrint DriverEntry _DriverEntry IoStartTimer IoStopTimer ' +
'IoCreateDevice IoCreateSymbolicLink IoAttachDeviceToDeviceStack KefReleaseSpinLockFromDpcLevel KfReleaseSpinLock '     +
'RtlQueryRegistryValues WdfDriverCreate RtlZeroMemory cleanup_module ' +
'WdfDeviceCreate KdPrint IoDeleteSymbolicLink IoDetachDevice ioctl '   +
'IoDeleteDevice IoCallDriver IoGetCurrentIrpStackLocation close '      +
'IoSkipCurrentIrpStackLocation IofCompleteRequest memcpy CreateFile '  +
'ReadFile WriteFile CloseHandle printf getch _getch register_chrdev '  +
'NT_SUCCESS __drv_requiresIRQL WDF_DRIVER_CONFIG_INIT fastcall '       +
'assert isalnum isalpha iscntrl isdigit isgraph islower isprint KiReleaseSpinLock KiAcquireSpinLock '       +
'ispunct isspace isupper isxdigit tolower toupper errno localeconv '   +
'setlocale acos asin atan atan2 ceil cos cosh exp fabs floor fmod KeInitializeSpinLock '    +
'frexp ldexp log log10 modf pow sin sinh sqrt tan tanh jmp_buf '       +
'longjmp setjmp raise signal sig_atomic_t va_arg va_end va_start '     +
'clearerr fclose feof ferror fflush fgetc fgetpos fgets fopen release '+
'fprintf fputc fputs fread freopen fscanf fseek fsetpos ftell '        +
'fwrite getc getchar gets perror printf putc putchar puts remove '     +
'rename rewind scanf setbuf setvbuf sprintf sscanf tmpfile tmpnam '    +
'ungetc vfprintf vprintf vsprintf abort abs atexit atof atoi atol '    +
'bsearch calloc div exit free getenv labs ldiv malloc mblen mbstowcs ' +
'mbtowc qsort rand realloc srand strtod strtol strtoul system '        +
'wcstombs wctomb memchr memcmp memcpy memmove memset strcat strchr '   +
'strcmp strcoll strcpy strcspn strerror strlen strncat strncmp '       +
'strncpy strpbrk strrchr strspn strstr strtok strxfrm asctime _call '  +
'clock ctime difftime gmtime localtime mktime strftime time _push '    +
'WdfControlDeviceInitAllocate WdfDeviceInitSetIoType GetModuleHandle ' +
'FindResource LoadResource LockResource SizeofResource GlobalAlloc '   +
'GlobalLock MAKEINTRESOURCE GlobalUnlock GlobalFree unregister_chrdev '+
'cdev_del cdev_add unregister_chrdev_region register_chrdev_region '   +
'alloc_chrdev_region cdev_alloc MKDEV MAJOR MINOR '                    +
'MmGetSystemAddressForMdlSafe MmGetMdlByteCount IoCompleteRequest '    +
'MmGetMdlVirtualAddress SDL_Init SDL_SetVideoMode SDL_RWFromFile '     +
'SDL_LoadBMP_RW SDL_UpperBlit SDL_Flip SDL_Delay SDL_FreeSurface '     +
'SDL_Quit SDL_ShowCursor SDL_BlitSurface SDL_LoadBMP SDL_PollEvent '   +
'ExitProcess crt_printf DeviceIoControl CTL_CODE IoInitializeTimer '   +
'crt_memset wsprintf IoMarkIrpPending IoStartPacket StrLen sprintf_s ' +
'IsListEmpty RemoveHeadList InsertHeadList KeSetTimerEx '              +
'InitializeListHead KeInitializeTimer KeInitializeDpc CreateEvent '    +
'WaitForSingleObject KeCancelTimer CONTAINING_RECORD '                 +
'IoStartNextPacket Sleep CancelIo SleepEx InsertTailList NtOpenFileStruct '             +
'RemoveEntryList UNREFERENCED_PARAMETER KeAcquireSpinLock LoadLibrary GetProcAddress '            +
'KeReleaseSpinLockFromDpcLevel KeReleaseSpinLockFromDpcLevel KeReleaseSpinLock IoCsqInitialize IoCsqInsertIrp ';

this.regexList = [
{regex: SyntaxHighlighter.regexLib.singleLineCComments, css:'comments'},
{regex: SyntaxHighlighter.regexLib.multiLineCComments,  css:'comments'},
{regex: SyntaxHighlighter.regexLib.doubleQuotedString,  css:'string'},
{regex: SyntaxHighlighter.regexLib.singleQuotedString,  css:'string'},
{regex: /^ *#.*/gm, css: 'preprocessor'},
{regex: new RegExp(this.getKeywords(my_constant),'gm'),
css:'my_constant bold'},
{regex: new RegExp(this.getKeywords(my_keyword),'gm'),
css:'my_keyword bold'},
{regex: new RegExp(this.getKeywords(my_function),'gm'),
css:'my_function bold'},
{regex: new RegExp(this.getKeywords(my_type),'gm'),
css:'my_type bold'},
];
};

  Brush.prototype  = new SyntaxHighlighter.Highlighter();
  Brush.aliases  = ['cpp', 'c'];
  SyntaxHighlighter.brushes.Cpp = Brush;
  typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
